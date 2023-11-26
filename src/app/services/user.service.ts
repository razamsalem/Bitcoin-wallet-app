import { Injectable } from '@angular/core';
import { Move } from '../models/move';
import { User } from '../models/user';
import { BehaviorSubject, from, throwError } from 'rxjs';
import { storageService } from './async-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
const ENTITY = 'user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User>(this._loadUserFromLocalStorage())
  public user$ = this._user$.asObservable()

  constructor() {
    this._user$.next(this._loadUserFromLocalStorage())
  }

  getUser() {
    return from(storageService.query<User>(ENTITY))
  }

  private _createUser() {
    const user =
    {
      name: "Alex Morgan",
      coins: 100,
      moves: [{
        amount: 2,
        at: 1701020506936,
        to: "Loren Asira",
        toId: "5a56640269f443a5d64b32ca"
      }] as Move[],
      age: 32,
      address: '1084 Branch Road, FL',
      phone: '904-379-5482',
      email: 'morganalex10@gmail.com',
    }
    return user
  }

  moveFunds(move: Move) {
    const user = this._user$.getValue();
    if (user.coins >= move.amount) {
      user.coins -= move.amount;
      user.moves.push(move);
      this._user$.next(user);
      this._saveUserToLocalStorage(user);
    } else {
      console.log('Insufficient funds');
    }
  }

  private _saveUserToLocalStorage(user: User) {
    localStorage.setItem(ENTITY, JSON.stringify(user));
  }

  private _loadUserFromLocalStorage(): User {
    const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    return user || this._createUser()
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }
}
