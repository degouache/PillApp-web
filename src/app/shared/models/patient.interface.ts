import {ProfileObject} from "./user.interface";

export interface PatientData {
  lastUpdate: number;
  updates: [UpdateObject];
}

export interface UpdateObject {
  type: string;
  lastUpdate: number;
  data: DataObject;
}

export interface DataObject {
  patientId: number;
  drugId: number;
  vitalId: number;
  id: number;
  firstLetter: string; //not from api
  date: Date; //not from api
  fullName: string;
  notes: string;
  kg: number;
  description: string;
  appointmentTimestamp: number;
  reminderTimestamp: number;
  startTimestamp: number;
  doneTimestamp: number;
  period: number;
  duration: number;
  dosePerIntake: string;
  dose: string;
  userProfiles: ProfileObject[];
}

export interface PatientRegister {
  fullName: string;
  notes: string;
  kg: number;
}
