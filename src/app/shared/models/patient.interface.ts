
export interface PatientData {
  lastUpdate: number;
  updates: UpdateObject;
}

export interface UpdateObject {
  type: string;
  lastUpdate: number;
  data: DataObject;
}

export interface DataObject {
  id: number;
  fullName: string;
  notes: string;
  kg: number;
}

export interface PatientRegister {
  fullName: string;
  notes: string;
  kg: number;
}
