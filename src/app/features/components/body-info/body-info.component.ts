import { Component } from '@angular/core';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-body-info',
  templateUrl: './body-info.component.html',
  styleUrls: ['./body-info.component.css']
})
export class BodyInfoComponent {
  constructor(private bodyState: BodyService) {}
  bodyPartSelected: string = 'none'
  ngOnInit() {
    this.bodyState.bodyPartSelected$.subscribe((selectedPart) => {
      this.bodyPartSelected = selectedPart
    })
  }
}
