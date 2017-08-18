import { Component, OnInit } from '@angular/core';
import { without } from 'lodash';

interface mockHabitsAndCheckboxesInterface {
  habit: string;
  daysOfWeek: [number]
}

let mockHabitsAndCheckboxes: mockHabitsAndCheckboxesInterface[] = [
  {
    habit: 'Hello',
    daysOfWeek: [0, 1, 2]
  },
  {
    habit: 'World',
    daysOfWeek: [0]
  },
]

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  mockHabitsAndCheckboxes = mockHabitsAndCheckboxes;
  newHabitButtonPushed: boolean;
  habitName: string;
  
  constructor() {
    this.newHabitButtonPushed = false;
    this.habitName = "";
  }

  ngOnInit() {
  }

  newHabitPush() {
    this.newHabitButtonPushed = true;
  }

  isTheDayIncluded(habitIndex: number, day: number): boolean {
    return  mockHabitsAndCheckboxes[habitIndex].daysOfWeek.includes(day);
  }

  checkDay(habitIndex: number, day: number): void {
    /* Check or uncheck a day in the habit array. If a value is already set, remove it. If not, add it. */
    if (!this.isTheDayIncluded(habitIndex, day)) {
      mockHabitsAndCheckboxes[habitIndex].daysOfWeek.push(day);      
    } else {
      mockHabitsAndCheckboxes[habitIndex].daysOfWeek = without(mockHabitsAndCheckboxes[habitIndex].daysOfWeek, day);            
    }
  }

  habitNameChanged(name) {
    console.log(name);
  }

  removeHabit(habitIndex: number): void {
    console.log(habitIndex);
    mockHabitsAndCheckboxes.splice(habitIndex, 1);
  }

  onEnter($event){
    $event.target.blur()
    this.habitNameChanged($event.target.outerText)
  }

  onSubmit(): void {
    mockHabitsAndCheckboxes.push({
      habit: this.habitName,
      daysOfWeek: [null]
    });

    this.habitName = "";
    this.newHabitButtonPushed = false;
  }
}
