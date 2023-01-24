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
import { round } from '../dashboard/data';

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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() series: any
  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      series: this.series,
      chart: {
        height: 350,
        type: 'line',
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
        text: 'Romaneios',
        align: 'left',
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
}
