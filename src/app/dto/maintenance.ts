export interface LogEntry {
    message: string;
    exception?: string;
    timestamp: Date;
    exceptionType?: string;
    logger?: string;
    severity: string;
}