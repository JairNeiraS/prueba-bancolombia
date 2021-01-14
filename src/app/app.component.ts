import { Component, OnInit } from '@angular/core';
import { errorMonitor } from 'events';
import { WeatherService } from './services/weather.service'
import { Chart } from 'chart.js'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bancolombia';
  weather;
  myChart = [];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

  }


  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res
        },
        err => console.log(err)
      )


    this.weatherService.getWeather(cityName)
      .subscribe(res => {
        let temp_max = res["list"].map(res => res.main.temp_max);
        let temp_min = res["list"].map(res => res.main.temp_min);
        let allDays = res["list"].map(res => res.dt);

        let weatherDays = [];

        allDays.forEach((res) => {
          let jsDate = new Date(res * 1000);
          let options = {
            day: "numeric",
            month: "short",
            year: "numeric"
          };

          weatherDays.push(jsDate.toLocaleTimeString("es", options));

          this.myChart = new Chart("myChart", {
            type: "bar",
            data: {
              labels: weatherDays,
              datasets: [
                {
                  label: "Temp Maxima",
                  data: temp_max,
                  backgroundColor: [
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400",
                    "#fc3400"

                  ],
                  fill: false
                },
                {
                  label: "Temp Minima",
                  data: temp_min,
                  backgroundColor: [
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff",
                    "#2888ff"

                  ],
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: true
              },
              scales: {
                xAxes: [
                  {
                    display: true
                  }
                ],
                yAxes: [
                  {
                    display: true
                  }
                ]
              }
            }
          });
        });
      });

    //

  }
  //
  submitLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value);
    cityName.value = '';
    cityName.focus();
    return false;
  }



}

