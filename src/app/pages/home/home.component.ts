import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = '';
  userCoins: number = 0;
  bitcoinRate: number = 0;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.userName = user.name;
    this.userCoins = user.coins;

    const coinsToConvert = this.userCoins;
    this.bitcoinService.getRate(coinsToConvert).subscribe(
      bitcoinRate => {
        this.bitcoinRate = bitcoinRate;
      },
      error => {
        console.error('Error fetching Bitcoin rate:', error);
      }
    );
  }
}
