import { Component } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  usdAmount!: number;
  bitcoinValue: number | null = null;
  error: boolean = false;

  constructor(private bitcoinService: BitcoinService) {}

  convertToBitcoin() {
    this.error = false; // Reset error flag
    if (this.usdAmount !== undefined && this.usdAmount > 0) {
      this.bitcoinService.getRate(this.usdAmount).subscribe(
        (value) => {
          this.bitcoinValue = value;
        },
        (error) => {
          console.error(error);
          this.error = true;
        }
      );
    } else {
      this.bitcoinValue = null; // Reset Bitcoin value if USD amount is not valid
    }
  }
}
