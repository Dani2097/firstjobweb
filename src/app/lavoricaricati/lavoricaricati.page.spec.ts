import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoricaricatiPage } from './lavoricaricati.page';

describe('LavoricaricatiPage', () => {
  let component: LavoricaricatiPage;
  let fixture: ComponentFixture<LavoricaricatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoricaricatiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoricaricatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
