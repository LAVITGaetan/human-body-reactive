import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  selectHumanBodyGroup(bodyGroup: string) {
    let selectedBodyGroup = document.getElementsByClassName(`body-group-${bodyGroup}`)
    if(selectedBodyGroup)
    for (let i = 0; i < selectedBodyGroup.length; i++) {
      const element = selectedBodyGroup[i];
      element.classList.add('body-part-selected')
    }
  }
}
