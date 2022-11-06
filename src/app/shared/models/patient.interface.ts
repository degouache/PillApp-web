
export interface PatientRequest {
  lastUpdate: number;
  updates: UpdateObject;
}

export interface PatientResponse {
    lastUpdate: number;
    updates: UpdateObject;
}

export interface UpdateObject {
  type: string;
  lastUpdate: number;
  data: DataUpdateObject;
}

export interface DataUpdateObject {
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
