import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { balance, dolar, financialBalance } from './data';
import { SparkSharedEventsService } from '../spark/service/spark-shared-events.service';
import {
  faBrazilianRealSign,
  faDollarSign,
  faFilter,
  faSackDollar,
  faTractor,
  faTruckRampBox,
  faWarehouse,
  faWeightScale,
} from '@fortawesome/free-solid-svg-icons';
import { SparkBankBalanceSharedEventsService } from '../spark-bank-balance/service/spark-shared-events.service';
import { FilterSearchSharedEventsService } from '../filter-modal/service/filter-search-shared-events.service';

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

  public cashierBankIcon = faSackDollar;
  public bankBalance = financialBalance[0].bankBalance;
  public receiveBalance = financialBalance[0].receiveBalance;
  public payBalance = financialBalance[0].payBalance;
  public iconWeigth = faWeightScale;
  public iconTractor = faTractor;
  public iconLoad = faTruckRampBox;
  public iconWareHouse = faWarehouse;
  public iconFilter = faFilter;
  public iconDolar = faDollarSign;
  public iconReal = faBrazilianRealSign;

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
      warehouseBalance: 15530810,
    },
  ];

  public romaneioPerDate = [
    {
      pendingKg: 200811137.78,
      pendingBags: 3124612.8,
      harvestKg: 130128722.75,
      harvestBags: 2231815,
      harvestLoadCount: 1021,
      harvestLoadAvgBags: 115,
      outputKg: -117587793,
      outputBags: -1128116,
      outputLoadCount: 2050,
      outputLoadAvgBags: -516.1,
      inputKg: 15530810,
      inputBags: 123121.1,
      inputLoadCount: 123,
      inputLoadAvgBags: 881.1,
      returnKg: 0,
      warehouseBalance: 23130810,
    },
    {
      pendingKg: 200811137.78,
      pendingBags: 2346852.3,
      harvestKg: 130128722.75,
      harvestBags: 1168812,
      harvestLoadCount: 3137,
      harvestLoadAvgBags: 314.9,
      outputKg: -117587793,
      outputBags: -2959796.6,
      outputLoadCount: 4650,
      outputLoadAvgBags: -1039.5,
      inputKg: 15530810,
      inputBags: 158846.8,
      inputLoadCount: 335,
      inputLoadAvgBags: 172.7,
      returnKg: 0,
      warehouseBalance: 15530810,
    },
    {
      pendingKg: 200811137.78,
      pendingBags: 5346852.3,
      harvestKg: 130128722.75,
      harvestBags: 6168812,
      harvestLoadCount: 9137,
      harvestLoadAvgBags: 5014.9,
      outputKg: -117587793,
      outputBags: -8959796.6,
      outputLoadCount: 7650,
      outputLoadAvgBags: -1939.5,
      inputKg: 15530810,
      inputBags: 858846.8,
      inputLoadCount: 1335,
      inputLoadAvgBags: 1772.7,
      returnKg: 0,
      warehouseBalance: 25530810,
    },
    {
      pendingKg: 200811137.78,
      pendingBags: 5346852.3,
      harvestKg: 130128722.75,
      harvestBags: 5168812,
      harvestLoadCount: 5137,
      harvestLoadAvgBags: 5014.9,
      outputKg: -117587793,
      outputBags: -5959796.6,
      outputLoadCount: 5650,
      outputLoadAvgBags: -539.5,
      inputKg: 15530810,
      inputBags: 558846.8,
      inputLoadCount: 535,
      inputLoadAvgBags: 572.7,
      returnKg: 0,
      warehouseBalance: 5530810,
    },
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
      warehouseBalance: 15530810,
    },
  ];

  constructor(
    private sparkSharedEventsService: SparkSharedEventsService,
    private sparkBankBalanceSharedEventsService: SparkBankBalanceSharedEventsService,
    public filterSearchSharedEventsService: FilterSearchSharedEventsService
  ) {}


  public mountLineSeries2() {
    const series = [
      {
        name: 'Peso Líquido Pendente',
        data: [],
      },
      {
        name: 'Colheita',
        data: [],
      },
      {
        name: 'Saídas',
        data: [],
      },
      {
        name: 'Entradas',
        data: [],
      },
      {
        name: 'Sacas Devolvidas',
        data: [],
      },
      {
        name: 'Saldo Depósito',
        data: [],
      },
    ];
    this.romaneioPerDate.forEach((obj) => {
      for (let prop in obj) {
        switch (prop) {
          case 'pendingBags':
            series[0].data.push(obj[prop]);
            break;

          case 'harvestBags':
          series[1].data.push(obj[prop]);
          break;

          case 'outputBags':
          series[2].data.push(obj[prop]);
          break;

          case 'inputBags':
          series[3].data.push(obj[prop]);
          break;

          case 'returnKg':
          series[4].data.push(obj[prop]);
          break;

          case 'warehouseBalance':
          series[5].data.push(obj[prop]);
          break;
        }
      }
    });

    return series;
  }

  public mountLineSeriesAvgr() {
    const series = [
      {
        name: 'Contagem de Cargas Colheita',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Colheita',
        data: [],
      },
      {
        name: 'Contagem de Cargas Saídas',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Saída',
        data: [],
      },
      {
        name: 'Contagem de Cargas Entradas',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Entradas',
        data: [],
      },
    ];
    this.romaneioPerDate.forEach((obj) => {
      for (let prop in obj) {
        switch (prop) {
          case 'harvestLoadCount':
          series[0].data.push(obj[prop]);
          break;

          case 'harvestLoadAvgBags':
          series[1].data.push(obj[prop]);
          break;

          case 'outputLoadCount':
          series[2].data.push(obj[prop]);
          break;

          case 'outputLoadAvgBags':
          series[3].data.push(obj[prop]);
          break;

          case 'inputLoadCount':
          series[4].data.push(obj[prop]);
          break;

          case 'inputLoadAvgBags':
          series[5].data.push(obj[prop]);
          break;
        }
      }
    });

    return series;
  }

  public mountLineSeries() {
    const series = [
      {
        name: 'Peso Líquido Pendente',
        data: [],
      },
      {
        name: 'Colheita',
        data: [],
      },
      {
        name: 'Contagem de Cargas Colheita',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Colheita',
        data: [],
      },
      {
        name: 'Saídas',
        data: [],
      },
      {
        name: 'Contagem de Cargas Saídas',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Saída',
        data: [],
      },
      {
        name: 'Entradas',
        data: [],
      },
      {
        name: 'Contagem de Cargas Entradas',
        data: [],
      },
      {
        name: 'Média de Sacas por Carga Entradas',
        data: [],
      },
      {
        name: 'Sacas Devolvidas',
        data: [],
      },
      {
        name: 'Saldo Depósito',
        data: [],
      },
    ];
    this.romaneioPerDate.forEach((obj) => {
      for (let prop in obj) {
        switch (prop) {
          case 'pendingBags':
            series[0].data.push(obj[prop]);
            break;

          case 'harvestBags':
          series[1].data.push(obj[prop]);
          break;

          case 'harvestLoadCount':
          series[2].data.push(obj[prop]);
          break;

          case 'harvestLoadAvgBags':
          series[3].data.push(obj[prop]);
          break;

          case 'outputBags':
          series[4].data.push(obj[prop]);
          break;

          case 'outputLoadCount':
          series[5].data.push(obj[prop]);
          break;

          case 'outputLoadAvgBags':
          series[6].data.push(obj[prop]);
          break;

          case 'inputBags':
          series[7].data.push(obj[prop]);
          break;

          case 'inputLoadCount':
          series[8].data.push(obj[prop]);
          break;

          case 'inputLoadAvgBags':
          series[9].data.push(obj[prop]);
          break;

          case 'returnKg':
          series[10].data.push(obj[prop]);
          break;

          case 'warehouseBalance':
          series[11].data.push(obj[prop]);
          break;
        }
      }
    });

    return series;
  }

  public negotiation = [
    {
      bagsSold: 1454013.8,
      bagsInStock: 720328.1,
      bagsDelivered: 1051130,
      bagsToDeliver: 402883.8,
      avgPriceBRL: 0,
      avgPriceUSD: 0,
      avgBagPriceBRL: 0,
      avgBagPriceUSD: 0,
    },
  ];

  public reciverFilter(data: any) {
    if (data) {
      this.romaneioPerDate = data;
    }
  }

  public percentageToDeliver = (
    (this.negotiation[0].bagsToDeliver * 100) /
    this.negotiation[0].bagsSold
  ).toFixed(2);
  public percentageDelivered = (
    (this.negotiation[0].bagsDelivered * 100) /
    this.negotiation[0].bagsSold
  ).toFixed(2);

  ngOnInit() {
    this.sendData();
    this.sendDataBalance();
    console.log(this.mountLineSeries());
    console.log('dashboard');
  }

  public mountPercentageNegotiation() {
    return [this.percentageToDeliver, this.percentageDelivered];
  }

  public sendData() {
    this.sparkSharedEventsService.sendClickEvent(this.dataDolarQuotation);
  }

  public sendDataBalance() {
    this.sparkBankBalanceSharedEventsService.sendClickEvent(this.balance);
  }

  public round = (value: number) => {
    const positiveValue = Math.abs(value);

    if (!positiveValue || positiveValue < 999) {
      return String(value);
    }

    if (positiveValue > 999 && positiveValue < 999999) {
      return (value / 1000).toFixed(2) + ' K';
    } else if (positiveValue > 999999 && positiveValue < 999999999) {
      return (value / 1000000).toFixed(2) + ' M';
    } else {
      return (value / 1000000000).toFixed(2) + ' B';
    }
  };
}
