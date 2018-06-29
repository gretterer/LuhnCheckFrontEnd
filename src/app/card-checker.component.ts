import { Component, OnChanges } from '@angular/core';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-checker',
  template: `
    <input #card
      (keyup.enter)="onEnter(card.value)">

    <ul><li>{{this.result[1]}}</li></ul>

   
  `
})
export class CardCheckerComponent  {

  constructor(private _cardService: CardService) { }

  value = '';
  result = '';

   onEnter(value: string) {

    this.value = value; 
  
    console.log("Component");
    console.log(this.value);

    this._cardService.getResult(this.value).subscribe(
      result => { this.result = result }
    );
    
    return this.result;
  
  }

//  getCCResult() { }

}
