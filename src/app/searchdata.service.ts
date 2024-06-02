import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {
  constructor() { }

  private dynamicSearchSubject = new BehaviorSubject<string>('');
  currentSearchText = this.dynamicSearchSubject.asObservable();

  updateSearch(searchText: string) {
    this.dynamicSearchSubject.next(searchText);
  }
}
