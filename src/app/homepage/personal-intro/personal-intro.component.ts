import { Component } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss'
})
export class PersonalIntroComponent {
  constructor() {
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/documents/Sanim_HossainCV.pdf';
    link.download = 'Sanim_Hossain_CV.pdf';
    link.click();
  }
}
