import { TestBed } from '@angular/core/testing';

import { UserListPresenter } from './user-list-presenter';

describe('UserListPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListPresenter = TestBed.get(UserListPresenter);
    expect(service).toBeTruthy();
  });
});
