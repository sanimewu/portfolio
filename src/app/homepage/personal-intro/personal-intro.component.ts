import { Component } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss'
})
export class PersonalIntroComponent {
  constructor(private message: NzMessageService) {
  }
  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.message.success('Link copied to clipboard!');
    }).catch(err => {
      this.message.error('Failed to copy: ', err);
    });
  }
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/documents/Sanim_HossainCV.pdf';
    link.download = 'Sanim_Hossain_CV.pdf';
    link.click();
  }
}
