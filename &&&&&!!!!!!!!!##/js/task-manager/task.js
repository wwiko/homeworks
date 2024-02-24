export class Task {
  constructor(options) {
    this.executor = options.executor;
    this.onFinish = options.onFinish || null;

    this.id = this.generateRandomId();
    this.startAt = new Date(
      Date.now() + options.startInSeconds * 1000
    ).toISOString();
  }

  generateRandomId() {
    return Math.floor(Math.random() * 1e13).toString();
  }
}
