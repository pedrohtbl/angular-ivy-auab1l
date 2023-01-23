import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() value: any;
  @Input() icon: any;
  @Input() isMonetary: any;
  constructor() {}

  ngOnInit() {}

  public round = (value: number) =>{
    const positiveValue = Math.abs(value)
  
    if(!positiveValue || positiveValue < 999){
      return String(value)
    }
  
    if(positiveValue > 999 && positiveValue < 999999){
      return this.isMonetary ? 'R$ ' + (value/1000).toFixed(2) + ' K' : (value/1000).toFixed(2) + ' K'
    }else if(positiveValue > 999999 && positiveValue < 999999999){
      return this.isMonetary ? 'R$ ' + (value/1000000).toFixed(2) + ' M' : (value/1000000).toFixed(2) + ' M'
    }else{
      return this.isMonetary ? 'R$ ' +  (value/1000000000).toFixed(2) + ' B' : (value/1000000000).toFixed(2) + ' B'
    }
  }
}
