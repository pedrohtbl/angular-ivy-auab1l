import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
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
  tooltip: ApexTooltip;
  responsive: ApexResponsive[]
}

@Component({
  selector: 'app-charts-negotiations',
  templateUrl: './charts-negotiations.component.html',
  styleUrls: ['./charts-negotiations.component.css']
})
export class ChartsNegotiationsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() series: any;

  constructor() {
   
   }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'donut',
        width: 500,
        foreColor: '#FFF',
      },
      colors: ['#dac761', '#61f168'],
      responsive: [{
        breakpoint: 1120,
        options: {
          chart: {
            width: 400
          },
          legend: {
            show: true,
            position: 'right',
            offsetY: 260,
            offsetX: -40,
            fontSize: 11
          },
          labels: ['Sacas A Entregar', 'Sacas Entregues'],
        }
      },
      {
        breakpoint: 950,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 190,
            offsetY: 5,
            width: 170,
            fontSize: 10,
          },
          labels: ['Sacas A Entregar', 'Sacas Entregues'],
        }
      },
      {
        breakpoint: 830,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            show: true,
            position: 'left',
            offsetY: 190,
            offsetX: -30,
            fontSize: 9
          },
          labels: ['Sacas A Entregar', 'Sacas Entregues'],
        }
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 500,
          },
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 300,
            offsetY: 0,
            fontSize: 12
          },
          labels: ['Sacas A Entregar', 'Sacas Entregues'],
        }
      },
      {
        breakpoint: 560,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 235,
            offsetY: 0,
          },
          labels: ['Sacas A Entregar', 'Sacas Entregues'],
        }
      },
      {
        breakpoint: 430,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 150,
          },
          labels: ['A Entregar', 'Entregues'],
        }
      },
      {
        breakpoint: 340,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: true,
            position: 'bottom',
            offsetX: 0,
            offsetY: 8,
            fontSize: 9,
          },
          labels: ['A Entregar', 'Entregues'],
        }
      }
    ],
      titles: {
        text: 'Negociações'
      },
      plotOptions:{
        pie:{
          donut:{
            size: '70%'
          }
        }
      },
      series: this.series.map(e => Number(e)),
      labels: ['Sacas A Entregar', 'Sacas Entregues'],
      legend: {
        show: true,
        floating: true,
        position: 'left',
        offsetY: 350,
        fontSize: '12',
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      }
    }
  }

}