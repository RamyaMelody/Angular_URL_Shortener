import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlviewdbComponent } from './urlviewdb.component';

describe('UrlviewdbComponent', () => {
  let component: UrlviewdbComponent;
  let fixture: ComponentFixture<UrlviewdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlviewdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlviewdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
