import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";


const STORAGE_KEY = 'production_events'
export interface CalEvent {
  title: string;
  remarks: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private storage: StorageService) {
  }

  async init() {

  }

  async getData(): Promise<any> {
    const data = await this.storage.getEvents(STORAGE_KEY);
    return JSON.parse(data.value);
  }

  async addData(newEvent: CalEvent) {
    return await this.storage.addEvent(STORAGE_KEY, newEvent)
  }
}
