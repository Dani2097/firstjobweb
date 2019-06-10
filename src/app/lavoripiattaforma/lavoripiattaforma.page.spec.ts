import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoripiattaformaPage } from './lavoripiattaforma.page';

describe('LavoripiattaformaPage', () => {
  let component: LavoripiattaformaPage;
  let fixture: ComponentFixture<LavoripiattaformaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoripiattaformaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoripiattaformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
