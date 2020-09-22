import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRopaComponent } from './listado-ropa.component';

describe('ListadoRopaComponent', () => {
  let component: ListadoRopaComponent;
  let fixture: ComponentFixture<ListadoRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
