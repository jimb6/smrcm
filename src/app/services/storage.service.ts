import {Injectable} from '@angular/core';
import {Preferences} from "@capacitor/preferences";

const SCHEDULE_KEY = 'schedule'
const SCHEDULE_NEXT_ID = 'schedule_id'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  async initializeApp() {
    return await Preferences.set({key: 'APP_INIT', value: 'true'})
  }

  async isAppInitialized() {
    const init = await Preferences.get({key: 'APP_INIT'});
    return init.value !== null;
  }

  async getCurrentScheduleId() {
    const id = await Preferences.get({key: SCHEDULE_NEXT_ID})
    return parseInt(id.value)
  }
  async insertNewScheduleData(value: object) {
    const existing = await Preferences.get({key: SCHEDULE_KEY})
    const existingId = await Preferences.get({key: SCHEDULE_NEXT_ID})
    let existingData = existing.value !== null ? JSON.parse(existing?.value) : [];
    let parseId = existingId.value !== null ? parseInt(existing?.value) : 1;

    await Preferences.set({key: SCHEDULE_NEXT_ID, value: (++parseId).toString()})
    await Preferences.set({
      key: SCHEDULE_KEY,
      value: JSON.stringify([...existingData, value])
    })
  }

  async getSchedulesData(): Promise<[]> {
    const data = await Preferences.get({
      key: SCHEDULE_KEY
    })
    return JSON.parse(data.value)
  }

  async deleteScheduleData(label: string) {
    const existing = await Preferences.get({key: 'schedule'})
    let existingData = existing.value !== null ? JSON.parse(existing?.value) : [];

    for (let i=0; i < existingData.length; i++) {
      if (existingData[i].label === label) {
        existingData.splice(i, 1)
      }
    }

    await Preferences.set({
      key: 'schedule',
      value: JSON.stringify(existingData)
    })
  }

  async getEvents(key: string) {
    return Preferences.get({key})
  }

  async addEvent(key: string, value: object) {
    const data = await Preferences.get({key});
    const events = JSON.parse(data.value);
    events.push(value);
    return Preferences.set({key, value: JSON.stringify(events)})
  }
}
