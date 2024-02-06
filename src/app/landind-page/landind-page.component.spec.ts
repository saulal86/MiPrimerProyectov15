import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandindPageComponent } from './landind-page.component';

describe('LandindPageComponent', () => {
  let component: LandindPageComponent;
  let fixture: ComponentFixture<LandindPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandindPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
