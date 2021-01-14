import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShopHomeComponent } from './online-shop-home.component';

describe('OnlineShopHomeComponent', () => {
  let component: OnlineShopHomeComponent;
  let fixture: ComponentFixture<OnlineShopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineShopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineShopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
