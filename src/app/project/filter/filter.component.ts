import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() sortByGoal: EventEmitter<string> = new EventEmitter<string>()
  @Output() filterProductByName: EventEmitter<string> = new EventEmitter<string>()

  @Input() isHighest: boolean

  listFilter: string

  constructor() { }

  ngOnInit(): void {
  }
  sortingArrByGoal() {
    this.sortByGoal.emit()
  }
  filteringArrByName() {

    this.filterProductByName.emit(this.listFilter)
  }

}
