import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalaProfiloPage } from './segnala-profilo.page';

describe('SegnalaProfiloPage', () => {
  let component: SegnalaProfiloPage;
  let fixture: ComponentFixture<SegnalaProfiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalaProfiloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegnalaProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
