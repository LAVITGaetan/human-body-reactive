import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor() { }
  private bodyPartSelected = new BehaviorSubject<string>('none')
  bodyPartSelected$ = this.bodyPartSelected.asObservable()

  selectHumanBodyGroup(bodyGroup: string) {
    let previousBodyGroup = document.getElementsByClassName(`body-group-${this.bodyPartSelected.value}`)    
    for (let i = 0; i < previousBodyGroup.length; i++) {
      const element = previousBodyGroup[i];
      element.classList.remove('body-part-selected')
    }
    this.bodyPartSelected.next(bodyGroup)

    let selectedBodyGroup = document.getElementsByClassName(`body-group-${bodyGroup}`)
    if (selectedBodyGroup)
      for (let i = 0; i < selectedBodyGroup.length; i++) {
        const element = selectedBodyGroup[i];
        element.classList.add('body-part-selected')
      }
  }
}
