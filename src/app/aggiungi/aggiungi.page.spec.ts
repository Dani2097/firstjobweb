import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPage } from './aggiungi.page';

describe('AggiungiPage', () => {
  let component: AggiungiPage;
  let fixture: ComponentFixture<AggiungiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
