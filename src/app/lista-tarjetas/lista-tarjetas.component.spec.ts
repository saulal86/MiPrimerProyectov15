import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarjetasComponent } from './lista-tarjetas.component';

describe('ListaTarjetasComponent', () => {
  let component: ListaTarjetasComponent;
  let fixture: ComponentFixture<ListaTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
