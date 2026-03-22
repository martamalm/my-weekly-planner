import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
  category: string;
}

interface Day {
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Weekly Planner';

  days: Day[] = [
    { name: 'Monday', tasks: [] },
    { name: 'Tuesday', tasks: [] },
    { name: 'Wednesday', tasks: [] },
    { name: 'Thursday', tasks: [] },
    { name: 'Friday', tasks: [] },
    { name: 'Saturday', tasks: [] },
    { name: 'Sunday', tasks: [] }
  ];

  categories = ['Work', 'Personal', 'Health'];
  newTaskName = '';
  newTaskCategory = 'Work';
  selectedDay: number = 0;
  nextTaskId = 1;

  addTask(dayIndex: number): void {
    if (this.newTaskName.trim()) {
      this.days[dayIndex].tasks.push({ id: this.nextTaskId++, name: this.newTaskName, category: this.newTaskCategory });
      this.newTaskName = '';
      this.newTaskCategory = 'Work';
    }
  }

  removeTask(dayIndex: number, taskIndex: number): void {
    this.days[dayIndex].tasks.splice(taskIndex, 1);
  }

  selectDay(dayIndex: number): void {
    this.selectedDay = dayIndex;
  }

  getCategoryColor(category: string): string {
    switch(category) {
      case 'Work': return '#FF6B6B';
      case 'Personal': return '#4ECDC4';
      case 'Health': return '#45B7D1';
      default: return '#95A5A6';
    }
  }
}