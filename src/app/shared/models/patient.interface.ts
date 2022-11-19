
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
  id: number;
  firstLetter: string; //not from api
  fullName: string;
  notes: string;
  kg: number;
  description: string,
  appointmentTimestamp: number,
  reminderTimestamp: number

}

export interface PatientRegister {
  fullName: string;
  notes: string;
  kg: number;
}
