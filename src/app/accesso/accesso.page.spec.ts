import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoPage } from './accesso.page';

describe('AccessoPage', () => {
  let component: AccessoPage;
  let fixture: ComponentFixture<AccessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
