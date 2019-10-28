import { TestBed } from '@angular/core/testing';

import { MoviesListService } from './movies-list.service';

describe('MoviesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesListService = TestBed.get(MoviesListService);
    expect(service).toBeTruthy();
  });
});
