import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.css']
})
export class NormalListComponent implements OnInit {
  items: Model[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [...Array(10).keys()].map(index => new Model(index, `Test Item ${index}`, Math.random()));
  }
}

export class Model {
  public id: number;
  public name: string;
  public value: number;

  constructor(id: number, name: string, value: number) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
}
