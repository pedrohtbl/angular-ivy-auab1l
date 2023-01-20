import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { dolar, financialBalance } from './data';
import { SparkSharedEventsService } from '../spark/service/spark-shared-events.service';
import { faFilter, faSackDollar, faTractor, faTruckRampBox, faWarehouse, faWeightScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dataDolarQuotation: ApexAxisChartSeries = dolar;
  public cashierBankIcon = faSackDollar
  public dolarQuotationValue: number = Number(
    dolar[0].data.slice(-1)[0].y.toFixed(3)
  );
  public bankBalance = financialBalance[0].bankBalance
  public receiveBalance = financialBalance[0].receiveBalance
  public payBalance = financialBalance[0].payBalance
  public iconWeigth = faWeightScale
  public iconTractor = faTractor
  public iconLoad = faTruckRampBox
  public iconWareHouse = faWarehouse
  public iconFilter = faFilter

  public romaneio = [
		{
			pendingKg: 200811137.78,
			pendingBags: 3346852.3,
			harvestKg: 130128722.75,
			harvestBags: 2168812,
			harvestLoadCount: 2137,
			harvestLoadAvgBags: 1014.9,
			outputKg: -117587793,
			outputBags: -1959796.6,
			outputLoadCount: 2650,
			outputLoadAvgBags: -739.5,
			inputKg: 15530810,
			inputBags: 258846.8,
			inputLoadCount: 335,
			inputLoadAvgBags: 772.7,
			returnKg: 0,
			warehouseBalance: 15530810
		}
	];

  constructor(private sparkSharedEventsService: SparkSharedEventsService) {}

  ngOnInit() {
    this.sendData();
    console.log('dashboard');
  }

  public sendData() {
    this.sparkSharedEventsService.sendClickEvent(this.dataDolarQuotation);
  }

  public round = (value: number) =>{
    const positiveValue = Math.abs(value)
  
    if(!positiveValue || positiveValue < 999){
      return String(value)
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
