import { Component } from '@angular/core';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-body-front',
  templateUrl: './body-front.component.html',
  styleUrls: ['./body-front.component.css']
})
export class BodyFrontComponent {
  constructor(private bodyState: BodyService) { }

  selectHumanBodyGroup(bodyGroup: string) {
    this.bodyState.selectHumanBodyGroup(bodyGroup)
  }
}
