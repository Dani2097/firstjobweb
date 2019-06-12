import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperoPasswordPage } from './recupero-password.page';

describe('RecuperoPasswordPage', () => {
  let component: RecuperoPasswordPage;
  let fixture: ComponentFixture<RecuperoPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperoPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperoPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
