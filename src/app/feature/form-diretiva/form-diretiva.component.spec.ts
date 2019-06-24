import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiretivaComponent } from './form-diretiva.component';

describe('FormDiretivaComponent', () => {
  let component: FormDiretivaComponent;
  let fixture: ComponentFixture<FormDiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
