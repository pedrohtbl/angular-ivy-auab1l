import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { dolar } from './data';
import { SparkSharedEventsService } from '../spark/service/spark-shared-events.service';

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

  constructor(private sparkSharedEventsService: SparkSharedEventsService) {}

  ngOnInit() {
    this.sendData();
    console.log('dashboard');
  }

  public sendData() {
    this.sparkSharedEventsService.sendClickEvent(this.dataDolarQuotation);
  }
}
