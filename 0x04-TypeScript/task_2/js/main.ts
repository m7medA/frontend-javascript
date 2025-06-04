interface SharedInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends SharedInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface extends SharedInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  return +salary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
}
const teacher = createEmployee(200); // Creates a Teacher
const director = createEmployee(1000); // Creates a Director

console.log(executeWork(teacher)); // Output: "Getting to work"
console.log(executeWork(director)); // Output: "Getting to director tasks"

type Subjects = Math | History;

function teachClass(teachClass: Subjects): string {
  return `Teaching ${teachClass === Math ? "Math" : "History"}`;
}
console.log(teachClass(Math));
