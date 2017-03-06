export class Logger {
  debugEnabled = true;

  debug(message: any, ...extra: any[]) {
    if (this.debugEnabled) {
      this.log(message, ...extra);
    }
  }

  log(message: any, ...extra: any[]) {
    console.log(message, ...extra);
  }
}
