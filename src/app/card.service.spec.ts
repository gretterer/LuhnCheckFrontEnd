import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './card.service';

describe('CardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
 it('should pass data from app to api', async() => {

 })
 it('should pass data from api to app', async() => {
   
 }) 
});
