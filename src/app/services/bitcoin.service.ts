import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private readonly bitcoinApiUrl = 'https://blockchain.info/tobtc';

  constructor(private http: HttpClient) { }
  
  getRate(coins: number): Observable<number> {
    const apiUrl = `${this.bitcoinApiUrl}?currency=USD&value=${coins}`;
    
    console.log('hey', this.http.get<number>(apiUrl));
    return this.http.get<number>(apiUrl);
    
  }

}
