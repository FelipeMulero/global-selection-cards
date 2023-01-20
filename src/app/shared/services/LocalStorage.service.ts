import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storageSource: any;

  constructor() {
  }

  clear(): void {
    this.storageSource = null;
  }

  setStorage(storage: any): void {
    this.storageSource = storage;
  }

  getStorage(): any {
    return this.storageSource;
  }

}
