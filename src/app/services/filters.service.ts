import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  appliedFilters: any = signal({
    sex: [] as string[],
    brand: [] as string[]
  });

  resultData: any[] = [];

  constructor() { }
}
