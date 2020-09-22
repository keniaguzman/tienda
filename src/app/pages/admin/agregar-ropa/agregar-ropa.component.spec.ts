import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRopaComponent } from './agregar-ropa.component';

describe('AgregarRopaComponent', () => {
  let component: AgregarRopaComponent;
  let fixture: ComponentFixture<AgregarRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
