import { Component } from '@angular/core';

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent {
  selectHumanBodyPart(bodyPart: string) {
    let selectedBodyPart = document.getElementById(`body-part-${bodyPart}`)
    if (selectedBodyPart)
    if(selectedBodyPart.classList.contains('body-part-selected')) {
      selectedBodyPart.classList.remove('body-part-selected')
      
    } else {
      selectedBodyPart.classList.add('body-part-selected')
    }
  }
}
