import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { HomepageComponent } from './homepage/homepage.component';
import { TopHeaderComponent } from './homepage/top-header/top-header.component';
import {NzMenuDirective, NzSubMenuComponent} from 'ng-zorro-antd/menu';
import { PersonalIntroComponent } from './homepage/personal-intro/personal-intro.component';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import { EducationComponent } from './homepage/education/education.component';
import { AchievementComponent } from './homepage/achievement/achievement.component';
import { SkillExpericenceComponent } from './homepage/skill-expericence/skill-expericence.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import {NzImageDirective, NzImageGroupComponent, NzImageModule} from 'ng-zorro-antd/image';
import {BlogComponent} from "./homepage/blog/blog.component";
import {ScrollAnimateDirective} from './homepage/scroll-animate.directive';
import {ScrollDownDirective} from './homepage/scroll-down.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopHeaderComponent,
    PersonalIntroComponent,
    EducationComponent,
    AchievementComponent,
    SkillExpericenceComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonComponent,
    NzModalModule,
    NzMenuDirective,
    NzSubMenuComponent,
    NzDividerComponent,
    NgOptimizedImage,
    NzImageGroupComponent,
    NzImageDirective,
    NzImageModule,
    BlogComponent,
    ScrollAnimateDirective,
    ScrollDownDirective
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
