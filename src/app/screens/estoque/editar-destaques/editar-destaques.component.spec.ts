import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDestaquesComponent } from './editar-destaques.component';

describe('EditarDestaquesComponent', () => {
  let component: EditarDestaquesComponent;
  let fixture: ComponentFixture<EditarDestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDestaquesComponent]
    });
    fixture = TestBed.createComponent(EditarDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
