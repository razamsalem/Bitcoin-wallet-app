import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() login = new EventEmitter<boolean>()
  title = 'My Card'
  userName: string = '';
  userCoins: number = 0;
  bitcoinRate: number = 0;
  formattedUserCoins: string = '';

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.userName = user.name;
    this.userCoins = user.coins;

    this.formatUserCoins();

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
    this.formattedUserCoins = this.userCoins.toFixed(2);
  }

  onLogin() {
    this.login.emit(true);
  }

}
