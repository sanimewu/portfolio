import {Component, HostListener, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent implements OnInit {
  logoName:string = "Md.Sanim Hossain";
  isNavbarOpen: boolean = false;
  screenIsMdOrLarger: boolean = false;
  constructor() {
  }
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize(): void {
    this.screenIsMdOrLarger = window.innerWidth >= 768;
    this.isNavbarOpen = this.screenIsMdOrLarger;
  }
  navbarClose(){
    this.screenIsMdOrLarger = window.innerWidth >= 768;
    if(!this.screenIsMdOrLarger){
      this.isNavbarOpen = false;
    }
  }

}
