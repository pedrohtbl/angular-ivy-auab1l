import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { round } from '../dashboard/data';
import { AreaChartSharedEventsService } from './service/area-chart-shared-events.service';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  markers: ApexMarkers;
}

@Component({
  selector: 'app-area-chart-romaneio',
  templateUrl: './area-chart-romaneio.component.html',
  styleUrls: ['./area-chart-romaneio.component.css'],
})
export class AreaChartRomaneioComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public subscriptions: Subscription[] = [];

  @Input() title: any
  @Input() subtitle: any
  @Input() series: any
  constructor(
    private areaChartSharedEventsService: AreaChartSharedEventsService
  ) {
    this.subscriptions.push(
      this.areaChartSharedEventsService.getClickEvent().subscribe(data => {
        this.updateSeries(data);
      })
    );
  }

  ngOnInit() {
    this.chartOptions = {
      series: this.series,
      chart: {
        height: 350,
        type: 'area',
        foreColor: '#ccc',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: round
      },
      stroke: {
        curve: 'straight',
        width: 2,
      },
      title: {
        text: this.title,
        align: 'left',
      },
      subtitle:{
        text: this.subtitle
      },
      markers: {
        size: 0,
      },
      grid: {
        row: {
          colors: ['transparent'],
        },
      },
      yaxis:{
        labels:{
          formatter: round
        }
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-01-20',
          '2023-01-21',
          '2023-01-22',
          '2023-01-23',
          '2023-01-24',
        ],
      },
    };
  }

  public updateSeries(series){
    this.chartOptions.series = series
  }
}
