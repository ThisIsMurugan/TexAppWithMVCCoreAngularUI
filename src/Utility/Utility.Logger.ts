export interface ILogger{
   Log();
}
export class BaseLogger implements ILogger {
  Log() {
    console.log('base looger');
  }
}
export class ConsoleLogger extends BaseLogger {
  Log() {
    console.log('logged using console');
  }
}

export class DbLogger extends BaseLogger {
  Log() {
    console.log('logged using DbLogger');
  }
}

export class FileLogger extends BaseLogger {
  Log() {
    console.log('logged using File Logger');
  }
}
