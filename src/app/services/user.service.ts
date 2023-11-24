import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    const user = {
      name: "Alex Morgan",
      coins: 100,
      moves: [],
      age: 32,
      address: '1084 Branch Road, FL',
      phone: '904-379-5482',
      email: 'alexmorgan207@gmail.com',
    }

    return user
  }
}
