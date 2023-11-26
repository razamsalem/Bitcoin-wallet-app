import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() exitHomePage = new EventEmitter<void>()
  title = 'My Card'
  bitcoinRate: number = 0;
  formattedUserCoins: string = '';
  user!: User;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.user = user
      this.formatUserCoins()

      const coinsToConvert = this.user.coins;
      this.bitcoinService.getRate(coinsToConvert).subscribe(
        bitcoinRate => {
          this.bitcoinRate = bitcoinRate;
        },
        error => {
          console.error('Error fetching Bitcoin rate:', error);
        }
      );
    });
  }
  
  formatUserCoins() {
    if (this.user) {
      this.formattedUserCoins = this.user.coins.toFixed(2);
    }
  }
}
