import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = '';
  apiKey='1ebec7d27c3329cdf30d88d484f450ff';
  

  constructor(private http: HttpClient) { 
    
    this.URL = `https://api.openweathermap.org/data/2.5/forecast/?appid=${this.apiKey}&lang=es&units=metric&cnt=12&q=`
    
    }

  getWeather(cityName: string){

    return this.http.get(`${this.URL}${cityName}`);

  }
 
}

export class DisplayComponent {
  
}