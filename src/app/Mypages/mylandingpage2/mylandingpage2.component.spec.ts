import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mylandingpage2Component } from './mylandingpage2.component';

describe('Mylandingpage2Component', () => {
  let component: Mylandingpage2Component;
  let fixture: ComponentFixture<Mylandingpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mylandingpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mylandingpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
