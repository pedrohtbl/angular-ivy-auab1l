import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ChartComponent,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  legend: ApexLegend;
  titles: ApexTitleSubtitle;
}

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.css'],
})
export class RadialBarChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar',
        foreColor: '#ccc',
      },
      titles:{
        text: 'Romaneio',
        align: 'center'
      },
      stroke: {
        lineCap: 'round',
      },
      legend: {
        show: true,
        floating: true,
        position: 'right',
        offsetX: 70,
        offsetY: 240,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            background: 'transparent',
          },
          track: {
            show: false,
          },
          startAngle: -180,
          endAngle: 180,

          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return '250';
              },
            },
          },
        },
      },
      labels: ['Produto1', 'Produto2', 'Produto3', 'Produto4'],
    };
  }

  ngOnInit() {}
}
