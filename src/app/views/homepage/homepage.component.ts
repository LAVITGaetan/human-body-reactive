import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  humanFigureShowed: boolean = false
  toggleHumanFigure() {
    let bodyFigure = document.getElementsByClassName(`body-figure`)
    if (!this.humanFigureShowed) {
      for (let i = 0; i < bodyFigure.length; i++) {
        const element = bodyFigure[i];
        element.classList.add('body-figure-showed')
        this.humanFigureShowed = true
      }
    } else {
      let bodyFigure = document.getElementsByClassName(`body-figure`)
      for (let i = 0; i < bodyFigure.length; i++) {
        const element = bodyFigure[i];
        element.classList.remove('body-figure-showed')
        this.humanFigureShowed = false
      }
    }
  }



}
