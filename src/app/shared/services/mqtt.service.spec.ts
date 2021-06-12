import { TestBed } from '@angular/core/testing';

import { MqttSongService } from './mqttSong.service';

describe('MqttService', () => {
  let service: MqttSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqttSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
