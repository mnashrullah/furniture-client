import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPage } from './user-add.page';

describe('UserAddPage', () => {
  let component: UserAddPage;
  let fixture: ComponentFixture<UserAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
