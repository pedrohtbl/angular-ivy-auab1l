import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';

export interface ChartOptions {
  titles: ApexTitleSubtitle;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  grid: ApexGrid;
  fill: ApexFill;
}

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  @ViewChild('chart') chart: ChartComponent;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'PRODUTO A',
          data: [44, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: 'PRODUTO B',
          data: [13, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: 'PRODUTO C',
          data: [11, 17, 15, 15, 21, 14, 15, 13],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        foreColor: '#ccc',
        toolbar: {
          show: false,
        },
      },
      titles: {
        text: 'Financeiro',
        align: 'center',
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          horizontal: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  ngOnInit() {
    console.log('barchart');
  }
}
