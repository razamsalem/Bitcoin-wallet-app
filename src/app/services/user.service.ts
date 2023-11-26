import { Injectable } from '@angular/core';
import { Move } from '../models/move';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    const user = {
      name: "Alex Morgan",
      coins: 100,
      moves: [] as Move[],
      age: 32,
      address: '1084 Branch Road, FL',
      phone: '904-379-5482',
      email: 'alexmorgan207@gmail.com',
    }
    return user
  }

  moveFunds(move: Move) {
    const user = this.getUser()
    if (user.coins >= move.amount) {
      user.coins -= move.amount
      user.moves.push(move)
      console.log('move', move);
      console.log('user', user);
      
    } else {
      console.log('Insufficient funds');
    }
  }
}
