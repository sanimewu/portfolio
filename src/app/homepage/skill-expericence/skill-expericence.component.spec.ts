import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillExpericenceComponent } from './skill-expericence.component';

describe('SkillExpericenceComponent', () => {
  let component: SkillExpericenceComponent;
  let fixture: ComponentFixture<SkillExpericenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillExpericenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillExpericenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
