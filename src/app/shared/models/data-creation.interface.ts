export interface MeetingData {
    patientId: number;
    description: string,
    appointmentTimestamp: number,
    reminderTimestamp: number
}

export interface DrugActionData {
    drugId: number;
    dose: string,
    doneTimestamp: number,
}

export interface DrugPlanData {
    patientId: number;
    description: string,
    dosePerIntake: string;
    period: number;
    startTimestamp: number;
    duration: number;
}