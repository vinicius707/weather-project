import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {

  private baseUrl = `https://api.weatherbit.io/v2.0/current?`;
  private forecastUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
  private forecasUrlKey = '&days=7&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30'
  private apiKey = '&country=BR&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getWeather(city): Observable<any> {
    
    let cityOrPostal;

    if(typeof city == "string") {
      cityOrPostal = "city=" + city;
    } else {
      cityOrPostal = "postal_code=" + city;
    }
    let finalUrl = this.baseUrl + cityOrPostal + this.apiKey;
    return this.http.get(finalUrl);
  }

  sendWeather(): Observable<any> {
    return this.subject.asObservable();
  }

  sendClick(){
    this.subject.next();
  }

  getClick(): Observable<any> {
    return this.subject.asObservable();
  }


  
  getWeatherForecast(city): Observable<any> {
    
    let cityOrPostal;

    if(typeof city == "string") {
      cityOrPostal = "city=" + city;
    } else {
      cityOrPostal = "postal_code=" + city;
    }
    let finalUrl = this.forecastUrl + cityOrPostal + this.forecasUrlKey;
    return this.http.get(finalUrl);
  }


  // api retornando previsão de 16 dias 

  // url: https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY

  // {
  //   "data": [
  //     {
  //       "moonrise_ts": 1587277586,
  //       "wind_cdir": "SE",
  //       "rh": 65,
  //       "pres": 930.634,
  //       "high_temp": 20.9,
  //       "sunset_ts": 1587329558,
  //       "ozone": 251.735,
  //       "moon_phase": 0.0485845,
  //       "wind_gust_spd": 6.81981,
  //       "snow_depth": 0,
  //       "clouds": 73,
  //       "ts": 1587265260,
  //       "sunrise_ts": 1587288258,
  //       "app_min_temp": 17.9,
  //       "wind_spd": 3.98445,
  //       "pop": 10,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1020.18,
  //       "moon_phase_lunation": 0.9,
  //       "valid_date": "2020-04-19",
  //       "app_max_temp": 23.8,
  //       "vis": 24.135,
  //       "dewpt": 13.8,
  //       "snow": 0,
  //       "uv": 0,
  //       "weather": {
  //         "icon": "c04d",
  //         "code": 804,
  //         "description": "Overcast clouds"
  //       },
  //       "wind_dir": 130,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0.3125,
  //       "low_temp": 16.5,
  //       "max_temp": 24.1,
  //       "moonset_ts": 1587325625,
  //       "datetime": "2020-04-19",
  //       "temp": 20.8,
  //       "min_temp": 17.9,
  //       "clouds_mid": 0,
  //       "clouds_low": 73
  //     },
  //     {
  //       "moonrise_ts": 1587366944,
  //       "wind_cdir": "SE",
  //       "rh": 66,
  //       "pres": 929.631,
  //       "high_temp": 25.6,
  //       "sunset_ts": 1587415912,
  //       "ozone": 256.765,
  //       "moon_phase": 0.016103,
  //       "wind_gust_spd": 6.10906,
  //       "snow_depth": 0,
  //       "clouds": 24,
  //       "ts": 1587351660,
  //       "sunrise_ts": 1587374681,
  //       "app_min_temp": 16.5,
  //       "wind_spd": 3.17065,
  //       "pop": 0,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1019.32,
  //       "moon_phase_lunation": 0.93,
  //       "valid_date": "2020-04-20",
  //       "app_max_temp": 25.2,
  //       "vis": 24.135,
  //       "dewpt": 12.8,
  //       "snow": 0,
  //       "uv": 7.283,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 802,
  //         "description": "Scattered clouds"
  //       },
  //       "wind_dir": 125,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0,
  //       "low_temp": 16.1,
  //       "max_temp": 25.7,
  //       "moonset_ts": 1587413952,
  //       "datetime": "2020-04-20",
  //       "temp": 19.9,
  //       "min_temp": 16.5,
  //       "clouds_mid": 0,
  //       "clouds_low": 24
  //     },
  //     {
  //       "moonrise_ts": 1587456274,
  //       "wind_cdir": "SE",
  //       "rh": 65,
  //       "pres": 928.076,
  //       "high_temp": 27.1,
  //       "sunset_ts": 1587502266,
  //       "ozone": 254.981,
  //       "moon_phase": 0.00194615,
  //       "wind_gust_spd": 6.62286,
  //       "snow_depth": 0,
  //       "clouds": 16,
  //       "ts": 1587438060,
  //       "sunrise_ts": 1587461104,
  //       "app_min_temp": 16.1,
  //       "wind_spd": 2.50597,
  //       "pop": 0,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1017.59,
  //       "moon_phase_lunation": 0.97,
  //       "valid_date": "2020-04-21",
  //       "app_max_temp": 26.6,
  //       "vis": 24.135,
  //       "dewpt": 12.6,
  //       "snow": 0,
  //       "uv": 7.65673,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 801,
  //         "description": "Few clouds"
  //       },
  //       "wind_dir": 139,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0,
  //       "low_temp": 16.3,
  //       "max_temp": 27.2,
  //       "moonset_ts": 1587502318,
  //       "datetime": "2020-04-21",
  //       "temp": 20.1,
  //       "min_temp": 16,
  //       "clouds_mid": 0,
  //       "clouds_low": 16
  //     },
  //     {
  //       "moonrise_ts": 1587545619,
  //       "wind_cdir": "SE",
  //       "rh": 67,
  //       "pres": 926.51,
  //       "high_temp": 26.8,
  //       "sunset_ts": 1587588620,
  //       "ozone": 256.864,
  //       "moon_phase": 0.00700739,
  //       "wind_gust_spd": 6.40592,
  //       "snow_depth": 0,
  //       "clouds": 15,
  //       "ts": 1587524460,
  //       "sunrise_ts": 1587547527,
  //       "app_min_temp": 16.8,
  //       "wind_spd": 2.5243,
  //       "pop": 20,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1015.82,
  //       "moon_phase_lunation": 1,
  //       "valid_date": "2020-04-22",
  //       "app_max_temp": 26.4,
  //       "vis": 24.132,
  //       "dewpt": 13.4,
  //       "snow": 0,
  //       "uv": 7.57918,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 801,
  //         "description": "Few clouds"
  //       },
  //       "wind_dir": 126,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0.125,
  //       "low_temp": 17.1,
  //       "max_temp": 26.9,
  //       "moonset_ts": 1587590780,
  //       "datetime": "2020-04-22",
  //       "temp": 20.4,
  //       "min_temp": 16.7,
  //       "clouds_mid": 0,
  //       "clouds_low": 15
  //     },
  //     {
  //       "moonrise_ts": 1587635015,
  //       "wind_cdir": "ESE",
  //       "rh": 70,
  //       "pres": 926.585,
  //       "high_temp": 24.3,
  //       "sunset_ts": 1587674976,
  //       "ozone": 254.799,
  //       "moon_phase": 0.0315891,
  //       "wind_gust_spd": 6.81065,
  //       "snow_depth": 0,
  //       "clouds": 41,
  //       "ts": 1587610860,
  //       "sunrise_ts": 1587633950,
  //       "app_min_temp": 17.4,
  //       "wind_spd": 3.48828,
  //       "pop": 30,
  //       "wind_cdir_full": "east-southeast",
  //       "slp": 1015.85,
  //       "moon_phase_lunation": 0.03,
  //       "valid_date": "2020-04-23",
  //       "app_max_temp": 24.2,
  //       "vis": 24.0185,
  //       "dewpt": 14.4,
  //       "snow": 0,
  //       "uv": 6.2267,
  //       "weather": {
  //         "icon": "c03d",
  //         "code": 803,
  //         "description": "Broken clouds"
  //       },
  //       "wind_dir": 120,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 1.1875,
  //       "low_temp": 16.8,
  //       "max_temp": 24.4,
  //       "moonset_ts": 1587679396,
  //       "datetime": "2020-04-23",
  //       "temp": 20.1,
  //       "min_temp": 17.4,
  //       "clouds_mid": 0,
  //       "clouds_low": 41
  //     },
  //     {
  //       "moonrise_ts": 1587724495,
  //       "wind_cdir": "ESE",
  //       "rh": 69,
  //       "pres": 927.399,
  //       "high_temp": 29,
  //       "sunset_ts": 1587761332,
  //       "ozone": 248.681,
  //       "moon_phase": 0.0754188,
  //       "wind_gust_spd": 7.4,
  //       "snow_depth": 0,
  //       "clouds": 30,
  //       "ts": 1587697260,
  //       "sunrise_ts": 1587720374,
  //       "app_min_temp": 16.8,
  //       "wind_spd": 3.48938,
  //       "pop": 20,
  //       "wind_cdir_full": "east-southeast",
  //       "slp": 1016.84,
  //       "moon_phase_lunation": 0.07,
  //       "valid_date": "2020-04-24",
  //       "app_max_temp": 25,
  //       "vis": 24.1349,
  //       "dewpt": 13,
  //       "snow": 0,
  //       "uv": 7.49033,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 802,
  //         "description": "Scattered clouds"
  //       },
  //       "wind_dir": 117,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0.0625,
  //       "low_temp": 16.9,
  //       "max_temp": 26,
  //       "moonset_ts": 1587768222,
  //       "datetime": "2020-04-24",
  //       "temp": 19,
  //       "min_temp": 16.8,
  //       "clouds_mid": 0,
  //       "clouds_low": 30
  //     },
  //     {
  //       "moonrise_ts": 1587814073,
  //       "wind_cdir": "SE",
  //       "rh": 64,
  //       "pres": 927.062,
  //       "high_temp": 29.4,
  //       "sunset_ts": 1587847689,
  //       "ozone": 243.478,
  //       "moon_phase": 0.137691,
  //       "wind_gust_spd": 4.12352,
  //       "snow_depth": 0,
  //       "clouds": 8,
  //       "ts": 1587783660,
  //       "sunrise_ts": 1587806798,
  //       "app_min_temp": 16.9,
  //       "wind_spd": 1.86079,
  //       "pop": 0,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1016.3,
  //       "moon_phase_lunation": 0.1,
  //       "valid_date": "2020-04-25",
  //       "app_max_temp": 28.2,
  //       "vis": 23.9911,
  //       "dewpt": 14.3,
  //       "snow": 0,
  //       "uv": 7.44075,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 801,
  //         "description": "Few clouds"
  //       },
  //       "wind_dir": 142,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0,
  //       "low_temp": 19.3,
  //       "max_temp": 29.1,
  //       "moonset_ts": 1587857304,
  //       "datetime": "2020-04-25",
  //       "temp": 22.2,
  //       "min_temp": 16.9,
  //       "clouds_mid": 0,
  //       "clouds_low": 8
  //     },
  //     {
  //       "moonrise_ts": 1587903742,
  //       "wind_cdir": "SSW",
  //       "rh": 55,
  //       "pres": 926.198,
  //       "high_temp": 27,
  //       "sunset_ts": 1587934047,
  //       "ozone": 242.217,
  //       "moon_phase": 0.217048,
  //       "wind_gust_spd": 3.00025,
  //       "snow_depth": 0,
  //       "clouds": 5,
  //       "ts": 1587870060,
  //       "sunrise_ts": 1587893222,
  //       "app_min_temp": 19.1,
  //       "wind_spd": 1.56574,
  //       "pop": 0,
  //       "wind_cdir_full": "south-southwest",
  //       "slp": 1014.97,
  //       "moon_phase_lunation": 0.13,
  //       "valid_date": "2020-04-26",
  //       "app_max_temp": 28.3,
  //       "vis": 24.135,
  //       "dewpt": 13.7,
  //       "snow": 0,
  //       "uv": 7.38058,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 801,
  //         "description": "Few clouds"
  //       },
  //       "wind_dir": 200,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0,
  //       "low_temp": 19.1,
  //       "max_temp": 29.8,
  //       "moonset_ts": 1587946669,
  //       "datetime": "2020-04-26",
  //       "temp": 23.8,
  //       "min_temp": 19.1,
  //       "clouds_mid": 0,
  //       "clouds_low": 5
  //     },
  //     {
  //       "moonrise_ts": 1587993464,
  //       "wind_cdir": "NNW",
  //       "rh": 56,
  //       "pres": 926.08,
  //       "high_temp": 26.8,
  //       "sunset_ts": 1588020406,
  //       "ozone": 246.063,
  //       "moon_phase": 0.311425,
  //       "wind_gust_spd": 6.51404,
  //       "snow_depth": 0,
  //       "clouds": 9,
  //       "ts": 1587956460,
  //       "sunrise_ts": 1587979646,
  //       "app_min_temp": 18.9,
  //       "wind_spd": 2.96588,
  //       "pop": 0,
  //       "wind_cdir_full": "north-northwest",
  //       "slp": 1014.44,
  //       "moon_phase_lunation": 0.17,
  //       "valid_date": "2020-04-27",
  //       "app_max_temp": 26.9,
  //       "vis": 24.1349,
  //       "dewpt": 13.6,
  //       "snow": 0,
  //       "uv": 7.30286,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 801,
  //         "description": "Few clouds"
  //       },
  //       "wind_dir": 340,
  //       "max_dhi": null,
  //       "clouds_hi": 9,
  //       "precip": 0,
  //       "low_temp": 18.8,
  //       "max_temp": 27.1,
  //       "moonset_ts": 1588036309,
  //       "datetime": "2020-04-27",
  //       "temp": 23,
  //       "min_temp": 19,
  //       "clouds_mid": 0,
  //       "clouds_low": 0
  //     },
  //     {
  //       "moonrise_ts": 1588083174,
  //       "wind_cdir": "NNW",
  //       "rh": 58,
  //       "pres": 926.38,
  //       "high_temp": 22.1,
  //       "sunset_ts": 1588106765,
  //       "ozone": 247.394,
  //       "moon_phase": 0.417775,
  //       "wind_gust_spd": 10.1017,
  //       "snow_depth": 0,
  //       "clouds": 56,
  //       "ts": 1588042860,
  //       "sunrise_ts": 1588066070,
  //       "app_min_temp": 18.6,
  //       "wind_spd": 4.193,
  //       "pop": 0,
  //       "wind_cdir_full": "north-northwest",
  //       "slp": 1014.7,
  //       "moon_phase_lunation": 0.2,
  //       "valid_date": "2020-04-28",
  //       "app_max_temp": 26.9,
  //       "vis": 24.135,
  //       "dewpt": 13.6,
  //       "snow": 0,
  //       "uv": 5.68623,
  //       "weather": {
  //         "icon": "c03d",
  //         "code": 803,
  //         "description": "Broken clouds"
  //       },
  //       "wind_dir": 340,
  //       "max_dhi": null,
  //       "clouds_hi": 56,
  //       "precip": 0,
  //       "low_temp": 16.1,
  //       "max_temp": 26.9,
  //       "moonset_ts": 1588126179,
  //       "datetime": "2020-04-28",
  //       "temp": 22.4,
  //       "min_temp": 18.6,
  //       "clouds_mid": 0,
  //       "clouds_low": 0
  //     },
  //     {
  //       "moonrise_ts": 1588172795,
  //       "wind_cdir": "WNW",
  //       "rh": 74,
  //       "pres": 927.183,
  //       "high_temp": 20.9,
  //       "sunset_ts": 1588193125,
  //       "ozone": 244.208,
  //       "moon_phase": 0.417775,
  //       "wind_gust_spd": 9.90122,
  //       "snow_depth": 0,
  //       "clouds": 100,
  //       "ts": 1588129260,
  //       "sunrise_ts": 1588152495,
  //       "app_min_temp": 16.1,
  //       "wind_spd": 4.6784,
  //       "pop": 85,
  //       "wind_cdir_full": "west-northwest",
  //       "slp": 1016.37,
  //       "moon_phase_lunation": 0.24,
  //       "valid_date": "2020-04-29",
  //       "app_max_temp": 21.4,
  //       "vis": 21.8957,
  //       "dewpt": 14.4,
  //       "snow": 0,
  //       "uv": 1.18292,
  //       "weather": {
  //         "icon": "t03d",
  //         "code": 202,
  //         "description": "Thunderstorm with heavy rain"
  //       },
  //       "wind_dir": 295,
  //       "max_dhi": null,
  //       "clouds_hi": 81,
  //       "precip": 16.375,
  //       "low_temp": 16.8,
  //       "max_temp": 22.1,
  //       "moonset_ts": 1588212579,
  //       "datetime": "2020-04-29",
  //       "temp": 19.3,
  //       "min_temp": 15.6,
  //       "clouds_mid": 87,
  //       "clouds_low": 63
  //     },
  //     {
  //       "moonrise_ts": 1588262262,
  //       "wind_cdir": "ESE",
  //       "rh": 77,
  //       "pres": 930.688,
  //       "high_temp": 20.1,
  //       "sunset_ts": 1588279487,
  //       "ozone": 247.576,
  //       "moon_phase": 0.531761,
  //       "wind_gust_spd": 7.20684,
  //       "snow_depth": 0,
  //       "clouds": 85,
  //       "ts": 1588215660,
  //       "sunrise_ts": 1588238919,
  //       "app_min_temp": 16.9,
  //       "wind_spd": 4.35285,
  //       "pop": 0,
  //       "wind_cdir_full": "east-southeast",
  //       "slp": 1020.82,
  //       "moon_phase_lunation": 0.27,
  //       "valid_date": "2020-04-30",
  //       "app_max_temp": 17.4,
  //       "vis": 24.1351,
  //       "dewpt": 13.2,
  //       "snow": 0,
  //       "uv": 1.79939,
  //       "weather": {
  //         "icon": "c04d",
  //         "code": 804,
  //         "description": "Overcast clouds"
  //       },
  //       "wind_dir": 118,
  //       "max_dhi": null,
  //       "clouds_hi": 16,
  //       "precip": 0,
  //       "low_temp": 18.5,
  //       "max_temp": 19.7,
  //       "moonset_ts": 1588216206,
  //       "datetime": "2020-04-30",
  //       "temp": 17.2,
  //       "min_temp": 16,
  //       "clouds_mid": 0,
  //       "clouds_low": 84
  //     },
  //     {
  //       "moonrise_ts": 1588351546,
  //       "wind_cdir": "ESE",
  //       "rh": 75,
  //       "pres": 930.564,
  //       "high_temp": 21.6,
  //       "sunset_ts": 1588365849,
  //       "ozone": 253.351,
  //       "moon_phase": 0.647597,
  //       "wind_gust_spd": 3.90742,
  //       "snow_depth": 0,
  //       "clouds": 86,
  //       "ts": 1588302060,
  //       "sunrise_ts": 1588325344,
  //       "app_min_temp": 16.8,
  //       "wind_spd": 2.19406,
  //       "pop": 10,
  //       "wind_cdir_full": "east-southeast",
  //       "slp": 1020.17,
  //       "moon_phase_lunation": 0.3,
  //       "valid_date": "2020-05-01",
  //       "app_max_temp": 20.2,
  //       "vis": 24.1353,
  //       "dewpt": 14.1,
  //       "snow": 0,
  //       "uv": 1.15648,
  //       "weather": {
  //         "icon": "c04d",
  //         "code": 804,
  //         "description": "Overcast clouds"
  //       },
  //       "wind_dir": 103,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0.25,
  //       "low_temp": 20.9,
  //       "max_temp": 24.6,
  //       "moonset_ts": 1588306318,
  //       "datetime": "2020-05-01",
  //       "temp": 18.5,
  //       "min_temp": 16.8,
  //       "clouds_mid": 0,
  //       "clouds_low": 86
  //     },
  //     {
  //       "moonrise_ts": 1588440657,
  //       "wind_cdir": "SW",
  //       "rh": 72,
  //       "pres": 931.917,
  //       "high_temp": 27.7,
  //       "sunset_ts": 1588452212,
  //       "ozone": 250.16,
  //       "moon_phase": 0.758171,
  //       "wind_gust_spd": 5.70727,
  //       "snow_depth": 0,
  //       "clouds": 0,
  //       "ts": 1588388460,
  //       "sunrise_ts": 1588411769,
  //       "app_min_temp": 19.8,
  //       "wind_spd": 2.40265,
  //       "pop": 20,
  //       "wind_cdir_full": "southwest",
  //       "slp": 1021.49,
  //       "moon_phase_lunation": 0.34,
  //       "valid_date": "2020-05-02",
  //       "app_max_temp": 20.7,
  //       "vis": 24.1351,
  //       "dewpt": 15,
  //       "snow": 0,
  //       "uv": 3.72715,
  //       "weather": {
  //         "icon": "c01d",
  //         "code": 800,
  //         "description": "Clear Sky"
  //       },
  //       "wind_dir": 236,
  //       "max_dhi": null,
  //       "clouds_hi": 0,
  //       "precip": 0.0625,
  //       "low_temp": 17.4,
  //       "max_temp": 27.7,
  //       "moonset_ts": 1588396464,
  //       "datetime": "2020-05-02",
  //       "temp": 20.3,
  //       "min_temp": 17.4,
  //       "clouds_mid": 0,
  //       "clouds_low": 0
  //     },
  //     {
  //       "moonrise_ts": 1588529638,
  //       "wind_cdir": "SE",
  //       "rh": 78,
  //       "pres": 932.229,
  //       "high_temp": 22.6,
  //       "sunset_ts": 1588538576,
  //       "ozone": 250.514,
  //       "moon_phase": 0.855581,
  //       "wind_gust_spd": 6.51601,
  //       "snow_depth": 0,
  //       "clouds": 70,
  //       "ts": 1588474860,
  //       "sunrise_ts": 1588498194,
  //       "app_min_temp": 18.4,
  //       "wind_spd": 3.9553,
  //       "pop": 0,
  //       "wind_cdir_full": "southeast",
  //       "slp": 1021.81,
  //       "moon_phase_lunation": 0.37,
  //       "valid_date": "2020-05-03",
  //       "app_max_temp": 18.6,
  //       "vis": 24.135,
  //       "dewpt": 14.7,
  //       "snow": 0,
  //       "uv": 1.99447,
  //       "weather": {
  //         "icon": "c03d",
  //         "code": 803,
  //         "description": "Broken clouds"
  //       },
  //       "wind_dir": 140,
  //       "max_dhi": null,
  //       "clouds_hi": 6,
  //       "precip": 0,
  //       "low_temp": 17.3,
  //       "max_temp": 22.6,
  //       "moonset_ts": 1588486630,
  //       "datetime": "2020-05-03",
  //       "temp": 18.6,
  //       "min_temp": 17.3,
  //       "clouds_mid": 0,
  //       "clouds_low": 66
  //     },
  //     {
  //       "moonrise_ts": 1588618554,
  //       "wind_cdir": "E",
  //       "rh": 73,
  //       "pres": 929.038,
  //       "high_temp": 26.3,
  //       "sunset_ts": 1588624941,
  //       "ozone": 251.057,
  //       "moon_phase": 0.932065,
  //       "wind_gust_spd": 3.13744,
  //       "snow_depth": 0,
  //       "clouds": 30,
  //       "ts": 1588561260,
  //       "sunrise_ts": 1588584620,
  //       "app_min_temp": 20,
  //       "wind_spd": 2.00903,
  //       "pop": 0,
  //       "wind_cdir_full": "east",
  //       "slp": 1018.61,
  //       "moon_phase_lunation": 0.4,
  //       "valid_date": "2020-05-04",
  //       "app_max_temp": 21.1,
  //       "vis": 24.1349,
  //       "dewpt": 15.5,
  //       "snow": 0,
  //       "uv": 2.74276,
  //       "weather": {
  //         "icon": "c02d",
  //         "code": 802,
  //         "description": "Scattered clouds"
  //       },
  //       "wind_dir": 96,
  //       "max_dhi": null,
  //       "clouds_hi": 10,
  //       "precip": 0,
  //       "low_temp": 18.1,
  //       "max_temp": 26.3,
  //       "moonset_ts": 1588576828,
  //       "datetime": "2020-05-04",
  //       "temp": 20.5,
  //       "min_temp": 18.1,
  //       "clouds_mid": 0,
  //       "clouds_low": 24
  //     }
  //   ],
  //   "city_name": "São Paulo",
  //   "lon": "-46.63611",
  //   "timezone": "America/Sao_Paulo",
  //   "lat": "-23.5475",
  //   "country_code": "BR",
  //   "state_code": "27"
  // }
}