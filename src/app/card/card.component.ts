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
  constructor() {}

  ngOnInit() {}

  public round = (value: number) =>{
    const positiveValue = Math.abs(value)
  
    if(!positiveValue){
      return '0'
    }
  
    if(positiveValue > 999 && positiveValue < 999999){
      return Math.floor(value/1000) + ' K'
    }else if(positiveValue > 999999 && positiveValue < 999999999){
      return Math.floor(value/1000000) + ' M'
    }else{
      return Math.floor(value/1000000000) + ' B'
    }
  }
}
