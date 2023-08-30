import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <br>{{ counter }}
    <div>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="increaseBy(-1)">-1</button>
      <button (click)="reset()">Reset</button>
    </div>
  `
})

export class CounterComponent implements OnInit {
  public counter: number = 10;
  constructor() { }

  ngOnInit() { }

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
