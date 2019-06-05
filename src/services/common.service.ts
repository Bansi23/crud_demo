import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  userdata() {
    return [
      {
        "id": 1,  "name": "bansi", "bod": '1994-01-12', "add": "ahamdabaad", "gender": "Female", "mobileNo": 6234567890,
        "mail": "Bansi@gmail.com"
      }]
  }
}

