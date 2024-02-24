import { Task } from "./task-manager/task.js";
import { TaskManager } from "./task-manager/manager.js";

const taskManager = new TaskManager();

const task1 = new Task({
  executor() {
    console.log("Task 1 in process");
    // throw new Error("Error in process");
  },
  startInSeconds: 3,
  onFinish() {
    console.log("Task 1 completed");
    // throw new Error("Error on Finish");
  },
});

const task2 = new Task({
  executor() {
    console.log("Task 2 in process");
  },
  startInSeconds: 1,
  onFinish() {
    console.log("Task 2 completed");
  },
});

taskManager.addTask("kfhdfsjk");
taskManager.addTask(task2);
taskManager.startExecution();
// taskManager.abortExecution();
TaskManager.killAllManagers();

// taskManager.removeTask(task1.id);
console.log(taskManager);
