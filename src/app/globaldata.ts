import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GloblData {
  constructor(private ht: HttpClient) {}

  public getConfig() {
    return this.ht.get('./assets/config/appconfig.json');
  }
}
