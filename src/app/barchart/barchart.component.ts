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
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { financial, round } from '../dashboard/data';

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
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  colors: any[];
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
      series: financial,
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#ccc',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        formatter: round,
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

      fill: {
        colors: ['#4CAF50'],
        opacity: 1,
      },
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
      yaxis: {
        labels: {
          formatter: round,
        },
      },
    };
  }

  ngOnInit() {
    console.log('barchart');
  }
}
