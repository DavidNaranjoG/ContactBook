import { TestBed } from '@angular/core/testing';

import { ServicesConctatBookService } from './services-conctat-book.service';

describe('ServicesConctatBookService', () => {
  let service: ServicesConctatBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesConctatBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
