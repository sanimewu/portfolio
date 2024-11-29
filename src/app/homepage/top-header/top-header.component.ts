import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent implements OnInit {
  logoName:string = "Md.Sanim Hossain";
  isNavbarOpen: boolean = false;
  screenIsMdOrLarger: boolean = false;

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
    this.screenIsMdOrLarger = window.innerWidth >= 768; // `md` breakpoint in Tailwind (768px)
  }

}
