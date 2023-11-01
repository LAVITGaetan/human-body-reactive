import { Component } from '@angular/core';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-body-back',
  templateUrl: './body-back.component.html',
  styleUrls: ['./body-back.component.css']
})
export class BodyBackComponent {

constructor(private bodyState: BodyService) {}

selectHumanBodyGroup(bodyGroup: string) {
this.bodyState.selectHumanBodyGroup(bodyGroup)
}
}
