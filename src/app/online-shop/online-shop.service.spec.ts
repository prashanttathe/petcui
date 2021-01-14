import { TestBed } from '@angular/core/testing';

import { OnlineShopService } from './online-shop.service';

describe('OnlineShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineShopService = TestBed.get(OnlineShopService);
    expect(service).toBeTruthy();
  });
});
