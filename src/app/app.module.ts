import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarchartComponent } from './barchart/barchart.component';
import { RadialBarChartComponent } from './radial-bar-chart/radial-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { SparkComponent } from './spark/spark.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgApexchartsModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    BarchartComponent,
    RadialBarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    SparkComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
