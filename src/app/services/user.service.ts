import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    const user = {
      name: "Ochoa Hyde",
      coins: 100,
      moves: []
    };

    return user;
  }
}
