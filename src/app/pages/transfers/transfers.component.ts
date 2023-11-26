// transfers.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Move } from '../../models/move';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  title = 'Transfers'
  allTransfers: Move[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllTransfers().subscribe((transfers) => {
      this.allTransfers = transfers
    })
  }
}
