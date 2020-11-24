import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TformularioComponent } from './tformulario.component';

describe('TformularioComponent', () => {
  let component: TformularioComponent;
  let fixture: ComponentFixture<TformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
