import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'My Card'
  userName: string = '';
  userCoins: number = 0;
  userAddress: string = '';
  userAge: number = 0;
  userPhone: string = '';
  userEmail: string = '';

  bitcoinRate: number = 0;
  formattedUserCoins: string = '';
  @Output() exitHomePage = new EventEmitter<void>()

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.userName = user.name;
    this.userCoins = user.coins;
    this.userAddress = user.address;
    this.userAge = user.age;
    this.userPhone = user.phone;
    this.userEmail = user.email;

    this.formatUserCoins()

    const coinsToConvert = this.userCoins;
    this.bitcoinService.getRate(coinsToConvert).subscribe(
      bitcoinRate => {
        this.bitcoinRate = bitcoinRate;
      },
      error => {
        console.error('Error fetching Bitcoin rate:', error)
      }
    )
  }

  formatUserCoins() {
    this.formattedUserCoins = this.userCoins.toFixed(2)
  }
}
