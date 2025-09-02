import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 


interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tesklist';
  
  tasks: Task[] = [];
  newTask: string = '';

  ngOnInit(): void {
    this.loadTasksFromLocalStorage();
  }

 
  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask.trim(), completed: false });
      this.newTask = '';
      this.saveTasksToLocalStorage(); 
    }
  }

  
  toggleCompleted(task: Task): void {
    task.completed = !task.completed;
    this.saveTasksToLocalStorage(); 
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }

  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}