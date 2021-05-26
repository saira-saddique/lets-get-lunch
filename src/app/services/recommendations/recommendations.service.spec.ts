import { TestBed } from '@angular/core/testing';

import { RecommendationsService } from './recommendations.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
const recommendationsResult = require('../../testing/recommendations-result.json');

describe('RecommendationsService', () => {
  let service: RecommendationsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RecommendationsService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a list of recommendations with a valid event id', () => {
      const eventId = '5a55135639fbc4ca3ee0ce5a';
      let response;
  
      service.get(eventId).subscribe(res => {
        response = res;
      });
  
      http
        .expectOne('http://127.0.0.1:3000/api/recommendations/' + eventId)
        .flush(recommendationsResult);
      expect(response).toEqual(recommendationsResult);
      http.verify();
    });

    it('should return a 500 if an error occurs', () => {
      const eventId = '5a55135639fbc4ca3ee0ce5a';
      const error = 'Something went wrong!';
      let errorResponse;
  
      service.get(eventId).subscribe(res => {}, err => {
        errorResponse = err;
      });
  
      http
        .expectOne('http://127.0.0.1:3000/api/recommendations/' + eventId)
        .flush({message: error}, {status: 500, statusText: 'Server Error'});
      expect(errorResponse.error.message).toEqual(error);
      http.verify();
    });
  });
});