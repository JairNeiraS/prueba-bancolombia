import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { MyChartComponent } from './Components/my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
