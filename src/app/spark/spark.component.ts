import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexMarkers,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { dolar } from './data';
import { SparkSharedEventsService } from './service/spark-shared-events.service';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  colors: any[];
}

@Component({
  selector: 'app-spark',
  templateUrl: './spark.component.html',
  styleUrls: ['./spark.component.css'],
})
export class SparkComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public subscriptions: Subscription[] = [];

  @ViewChild('chart') chart: ChartComponent;
  @Input() data: ApexAxisChartSeries;
  @Input() name: string;
  constructor(private sparkSharedEventsService: SparkSharedEventsService) {
    this.chartOptions = {
      series: this.data,
      chart: {
        height: 80,
        type: 'line',
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      colors: ['#fff'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 20,
          left: 110,
        },
        row: {
          colors: ['transparent'],
          opacity: 0.5,
        },
      },
      responsive: [
        {
          breakpoint: 1080,
          options: {
            grid: {
              padding: {
                top: 20,
                bottom: 20,
                left: 75,
              },
            },
          },
        },
        {
          breakpoint: 767,
          options: {
            grid: {
              padding: {
                top: 20,
                bottom: 20,
                left: 110,
              },
            },
          },
        },
      ],
      tooltip: {
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
        theme: 'dark',
      },
      xaxis: {
        type: 'datetime',
      },
    };
  }

  ngOnInit() {
    console.log(this.data);
  }
}
