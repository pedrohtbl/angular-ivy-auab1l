import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { balance, dolar, financialBalance } from './data';
import { SparkSharedEventsService } from '../spark/service/spark-shared-events.service';
import { faBrazilianRealSign, faDollarSign, faFilter, faSackDollar, faTractor, faTruckRampBox, faWarehouse, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { SparkBankBalanceSharedEventsService } from '../spark-bank-balance/service/spark-shared-events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dataDolarQuotation: ApexAxisChartSeries = dolar;
  public dolarQuotationValue: number = Number(
    dolar[0].data.slice(-1)[0].y.toFixed(3)
  );

  public balance: ApexAxisChartSeries = balance;
  public balanceActual: number = Number(
    balance[0].data.slice(-1)[0].y.toFixed(3)
  );

  public cashierBankIcon = faSackDollar
  public bankBalance = financialBalance[0].bankBalance
  public receiveBalance = financialBalance[0].receiveBalance
  public payBalance = financialBalance[0].payBalance
  public iconWeigth = faWeightScale
  public iconTractor = faTractor
  public iconLoad = faTruckRampBox
  public iconWareHouse = faWarehouse
  public iconFilter = faFilter
  public iconDolar = faDollarSign
  public iconReal = faBrazilianRealSign

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

  public negotiation = [
		{
			bagsSold: 1454013.8,
			bagsInStock: 720328.1,
			bagsDelivered: 1051130,
			bagsToDeliver: 402883.8,
			avgPriceBRL: 0,
			avgPriceUSD: 0,
			avgBagPriceBRL: 0,
			avgBagPriceUSD: 0
		}
	]

  public percentageToDeliver = ((this.negotiation[0].bagsToDeliver *100)/this.negotiation[0].bagsSold).toFixed(2)
  public percentageDelivered = ((this.negotiation[0].bagsDelivered *100)/this.negotiation[0].bagsSold).toFixed(2)

  constructor(
    private sparkSharedEventsService: SparkSharedEventsService,
    private sparkBankBalanceSharedEventsService: SparkBankBalanceSharedEventsService
    ) {}

  ngOnInit() {
    this.sendData();
    this.sendDataBalance()
    console.log('dashboard');
  }

  public mountPercentageNegotiation (){
    return [this.percentageToDeliver, this.percentageDelivered]
  }

  public sendData() {
    this.sparkSharedEventsService.sendClickEvent(this.dataDolarQuotation);
  }

  public sendDataBalance() {
    this.sparkBankBalanceSharedEventsService.sendClickEvent(this.balance);
  }

  public round = (value: number) =>{
    const positiveValue = Math.abs(value)
  
    if(!positiveValue || positiveValue < 999){
      return String(value)
    }
  
    if(positiveValue > 999 && positiveValue < 999999){
      return (value/1000).toFixed(2) + ' K'
    }else if(positiveValue > 999999 && positiveValue < 999999999){
      return (value/1000000).toFixed(2) + ' M'
    }else{
      return (value/1000000000).toFixed(2) + ' B'
    }
  }
}
