import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '@app/dto/users';

@Injectable()
export class AuthorizationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<{}>;
  private readonly authenticationUrl = `${environment.apiUrl}/api/authorization`;

  constructor(private http: HttpClient) {
    let user = this.getUser();
    this.currentUserSubject = new BehaviorSubject<User>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout(): Observable<{}> {
    return of(this.http.post<User[]>(`${this.authenticationUrl}/logout`, {}).subscribe(() =>
      this.removeUserFromLocalStorage()
    ))
  }

  logon(): Observable<User> {
    return this.http.post<User>(`${this.authenticationUrl}/logon`, {});
  }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem('user')) as User;
    return user;
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem('user');
  }
}