import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { LogEntry} from '@dto/maintenance';
import { pipe, zip, range, timer } from 'rxjs';
import { retryWhen, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class LoggingService {
  
  private logBuffer: LogEntry[] = [];
  private logLevel: string = "ERROR";
  private bufferSize: number = 20;
  private readonly maintenanceUrl = `${environment.apiUrl}/api/maintenance`;

  constructor(private http: HttpClient) {  }

  info(message: string, logger?: string) {
    console.log(`Logger: 'Rba.Admin.Frontend'} - Message: ${message}`);

    if (this.logLevel !== "INFO"){
      return;
    }

    let logEntry: LogEntry = {
        severity: "INFO",
        message: message,
        logger: logger,
        timestamp: new Date(Date.now())
    };

    this.saveLog(logEntry);
  }

  error(message: string, logger?: string) {    
    console.log(`Logger: 'Rba.Admin.Frontend' - Message: ${message}`);

    let logEntry: LogEntry = {
      severity: "ERROR",
      exception: message,
      message: message,
      exceptionType: "Request",
      logger: logger,
      timestamp: new Date(Date.now())
    };

    this.saveLog(logEntry);    
  }

  clear() {
    this.logBuffer = [];
  }

  private saveLog(logEntry: LogEntry): void {
    if (this.logBuffer.length > this.bufferSize){    
      var buffer = this.logBuffer; 
      this.clear();
      this.sendLog(buffer);
    } else {
      this.logBuffer.push(logEntry);
    }
  }

  private sendLog(buffer: LogEntry[]): void {      
      this.http.post<LogEntry[]>(`${this.maintenanceUrl}`, buffer)
        .pipe(this.exponentialBackoff(3, 1000))
        .subscribe();      
  }

  private exponentialBackoff(maxTries: number, ms: number) {
    return pipe(
      retryWhen(attempts => zip(range(1, maxTries), attempts)
        .pipe(
          map(([i]) => i * i),
          mergeMap(i =>  timer(i * ms))
        )
      )
    );
  }
}