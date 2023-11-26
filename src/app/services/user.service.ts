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

  private _user$ = new BehaviorSubject<User>(this._createUser())
  public user$ = this._user$.asObservable()

  constructor() {
    const user = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!user) {
      localStorage.setItem(ENTITY, JSON.stringify(this._createUser()));
    }
    this._user$.next(this._createUser())
  }

  getUser() {
    return from(storageService.query<User>(ENTITY))
  }

  private _createUser() {
    const user =
    {
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
    const user = this._user$.getValue()
    if (user.coins >= move.amount) {
      user.coins -= move.amount
      user.moves.push(move)
      console.log('move', move)
      console.log('user', user)
      this._user$.next(user)
    } else {
      console.log('Insufficient funds')
    }
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }
}
