import { Component, OnInit } from '@angular/core';
import { IBackground } from './interface/IBackground.interface';
import { WelcomeBackgroundService } from './welcome.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  background: IBackground[]
  currentBackground: IBackground
  backgroundIndex: number = 0
  constructor(private _backgroundService: WelcomeBackgroundService) {
  }



  ngOnInit(): void {
    this.background = this._backgroundService.getBackground()
    this.currentBackground = this.background[0]
    setInterval(() => {
      this.sampleMethodCall()
    }, 5000);
  }
  public sampleMethodCall() {
    this.backgroundIndex = (this.backgroundIndex + 1) % this.background.length
    this.currentBackground = this.background[this.backgroundIndex]
  }

}
