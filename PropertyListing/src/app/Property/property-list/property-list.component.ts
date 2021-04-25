import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingApiService } from 'src/app/HousingApi.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  Properties: any;
  constructor(private http: HttpClient, private api: HousingApiService) { }

  ngOnInit(): void {
    this.api.getPropertyList().subscribe(
      data => { this.Properties = data },
      err => { console.log('error') }
    );
  }

}
