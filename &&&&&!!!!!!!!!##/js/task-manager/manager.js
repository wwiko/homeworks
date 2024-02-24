export class TaskManager {
  static instances = [];

  constructor() {
    this.tasks = [];
    this.timeouts = [];
    this.executionStarted = false;
    TaskManager.instances.push(this);
  }

  addTask(task) {
    this.tasks.push(task);
    if (this.executionStarted) {
      this.executeTask(task);
    }
  }

  startExecution() {
    this.executionStarted = true;
    this.tasks.forEach((task) => this.executeTask(task));
  }

  async executeTask(task) {
    try {
      await new Promise((resolve) => {
        const timeout = setTimeout(
          resolve,
          Date.parse(task.startAt) - Date.now()
        );
        this.timeouts.push(timeout);
      });

      await task.executor();
      if (task.onFinish) await task.onFinish();
    } catch (err) {
      alert("Task failed with " + err.message);
    }
  }

  addOnFinishToTask(taskId, callback) {
    this.tasks.forEach((task) => {
      if (task.id === taskId) {
        if (!task.onFinish) {
          task.onFinish = callback;
        }
      }
    });
  }

  abortExecution() {
    this.executionStarted = false;
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
  }

  removeTask(taskId) {
    for (const task of this.tasks) {
      if (task.id === taskId) {
        const taskIndex = this.tasks.indexOf(task);
        this.tasks.splice(taskIndex, 1);
      }
    }

    if (this.executionStarted) {
      this.abortExecution();
      this.startExecution();
    }
  }

  static killAllManagers() {
    TaskManager.instances.forEach((instance) => instance.abortExecution());
  }
}
