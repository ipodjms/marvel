import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TokenService {
  constructor() {}

  hasToken(key) {
    return !!this.getToken(key);
  }

  setToken(key, token) {
    window.localStorage.setItem(key, (JSON.stringify(token)) );
  }

  getToken(key) {
    return window.localStorage.getItem(key);
  }

  removeToken(key) {
    window.localStorage.removeItem(key);
  }
}
