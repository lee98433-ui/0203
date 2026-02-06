import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from '../../@service/httpclient.service';

@Component({
  selector: 'app-api-demo',
  imports: [CommonModule],
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.scss']
})
export class ApiDemoComponent implements OnInit {
  DatasetDescription!: string;
  locationsName!: string;

  location: any[] = [];   // 地區所有氣象資料
  chooseLocation = '';   // 選擇地區
  weather: any[] = [];   // 初始空陣列

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {
    this.http.getApi(
      'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-AF8F7225-1E93-48DF-B46F-CFA70CCC23EA&limit=3'
    ).subscribe((res: any) => {

      console.log(res);

      const loc = res.records.Locations[0];//進到資料
      this.DatasetDescription = loc.DatasetDescription;//標題
      this.locationsName = loc.LocationsName;//高雄市
      this.location = loc.Location;//所有地區資料


      if (this.location.length > 0) {
        this.changeLocation(this.location[0]);
      }
    });
  }

  changeLocation(location: any) {
  if (!location) return;
  this.chooseLocation = location.LocationName;
  // 確保 WeatherElement 存在且有資料
  this.weather = location.WeatherElement || [];
  console.log('當前區域天氣資料：', this.weather);
  }
}
