import { Component, Input } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { Result } from './'
@Component({
  selector: 'app-card-checker',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
    <div>
        <p>{{results}}</p>
    </div>
  `
})
export class CardCheckerComponent {
  value = '';
  results = '';
  onEnter(value: string) { this.value = value; }
  getResult() : void {
    this.results = this.CardService.getResult().subscribe(results => this.results = results);
  }
  
}
