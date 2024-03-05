import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFonsiComponent } from './componente-fonsi.component';

describe('ComponenteFonsiComponent', () => {
  let component: ComponenteFonsiComponent;
  let fixture: ComponentFixture<ComponenteFonsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteFonsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFonsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
