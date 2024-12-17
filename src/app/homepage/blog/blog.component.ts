import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ScrollAnimateDirective} from "../scroll-animate.directive";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    ScrollAnimateDirective,
    ScrollAnimateDirective
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
