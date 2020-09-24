import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRopaComponent } from './modificar-ropa.component';

describe('ModificarRopaComponent', () => {
  let component: ModificarRopaComponent;
  let fixture: ComponentFixture<ModificarRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
