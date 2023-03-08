import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  property:any

  constructor(private http:HttpClient) { }
  getHouseDetails(){
    return this.http.get("data/property.json");
  }
}
