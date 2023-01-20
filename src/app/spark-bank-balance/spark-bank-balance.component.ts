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
import { SparkBankBalanceSharedEventsService } from './service/spark-shared-events.service';

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
  selector: 'app-spark-bank-balance',
  templateUrl: './spark-bank-balance.component.html',
  styleUrls: ['./spark-bank-balance.component.css'],
})
export class SparkBankBalanceComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public subscriptions: Subscription[] = [];
  public data: ApexAxisChartSeries;

  @ViewChild('chart') chart: ChartComponent;
  @Input() name: string;
  @Input() value: any;
  constructor(private sparkBankBalanceSharedEventsService: SparkBankBalanceSharedEventsService
    ) {
    this.subscriptions.push(
      this.sparkBankBalanceSharedEventsService.getClickEvent().subscribe((data) => {
        this.chartOptions = {
          series: data,
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
      })
    );
  }

  ngOnInit() {}
}