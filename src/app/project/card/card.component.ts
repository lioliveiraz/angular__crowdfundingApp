import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  project: object = null
  @Input() projectObj: object;

  constructor() { }
  ngOnChanges(): void {
    this.project = this.projectObj

  }
  ngOnInit(): void {

  }

}
