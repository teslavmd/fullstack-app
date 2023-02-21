import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBoxComponent } from './formulario-box.component';

describe('FormularioBoxComponent', () => {
  let component: FormularioBoxComponent;
  let fixture: ComponentFixture<FormularioBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
