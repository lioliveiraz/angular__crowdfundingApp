import { Injectable } from '@angular/core'
import { IBackground } from './interface/IBackground.interface';

@Injectable({
    providedIn: 'root'
})

export class WelcomeBackgroundService {
    getBackground(): IBackground[] {
        return [
            {
                image: '../../assets/images/backgroundWelcome1.jpg',
                headline: "Helping kids"
            },
            {
                image: '../../assets/images/backgroundWelcome2.jpg',
                headline: "Fighting against Corona"
            },
            {
                image: '../../assets/images/backgroundWelcome3.jpg',
                headline: "Helping firefighters"
            },
        ]
    }
}