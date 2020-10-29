import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdetallesComponent } from './tdetalles.component';

describe('TdetallesComponent', () => {
  let component: TdetallesComponent;
  let fixture: ComponentFixture<TdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
