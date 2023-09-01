export type ILogger = {
  info(...args: any): void;
  error(...args: any): void;
  warn(...args: any): void;
  debug(...args: any): void;
  child(...args: any): ILogger;
};
