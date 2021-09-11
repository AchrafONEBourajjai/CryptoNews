import { TestBed } from '@angular/core/testing';

import { ProviderSettingsService } from './provider-settings.service';

describe('ProviderSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderSettingsService = TestBed.get(ProviderSettingsService);
    expect(service).toBeTruthy();
  });
});
