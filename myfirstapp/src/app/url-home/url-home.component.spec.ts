import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlHomeComponent } from './url-home.component';

describe('UrlHomeComponent', () => {
  let component: UrlHomeComponent;
  let fixture: ComponentFixture<UrlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
