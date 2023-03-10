import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';
import { round } from '../dashboard/data';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  legend: ApexLegend;
  titles: ApexTitleSubtitle;
  fill: ApexFill;
  colors: any[];
  tooltip: ApexTooltip
}

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.css'],
})

export class RadialBarChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() value: any;
  @Input() name: any;
  @Input() percentage: any;
  constructor() {
   
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        height: 480,
        type: 'radialBar',
        foreColor: '#FFF'
      },

      series: [Number(this.percentage)],
      colors: ['#61f168'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%',
          },
          track: {
            show: false,
          },
          dataLabels: {
            name: {
              offsetY: -10,
              show: true,
              color: '#FFF',
              fontSize: '13px',
            },
            value: {
              color: '#FFF',
              fontSize: '30px',
              show: true,
            },
          },
        },
      },

      stroke: {
        lineCap: 'round',
      },
      titles: {
        text: this.name,
        style:{
          fontSize: '20'
        }
      },
      labels: [this.name],
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '16',
        formatter: (e) => `${e} - R$ ${round(this.value)}`
      },
      tooltip:{
        enabled: true,
        followCursor: true,
        fillSeriesColor: false,
        theme: 'dark',
        y: {
          formatter: (e) => `${e}%`
        }
      }
    };
  }
}
