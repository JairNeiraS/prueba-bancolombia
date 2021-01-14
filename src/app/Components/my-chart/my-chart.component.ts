import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor(private _weather: WeatherService) { }

  ngOnInit(): void {
    
    
    }
  }

