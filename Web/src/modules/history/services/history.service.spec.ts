/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistoryService } from './history.service';

describe('HistoryService', () => {
    let historyService: HistoryService;
    beforeEach(() => {
        TestBed.configureTestingModule({
      providers: [HistoryService]
        });
        historyService = TestBed.inject(HistoryService);
    });

    describe('getHistory$', () => {
      it('should return Observable<Tables>', () => {
          historyService.getHistory$().subscribe(response => {
              expect(response).toEqual({});
          });
      });
  });
});
