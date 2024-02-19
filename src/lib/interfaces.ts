export interface DiagnosisInterface {
    Issue:          Issue;
    Specialisation: Specialisation[];
}

export interface Issue {
    ID:       number;
    Name:     string;
    Accuracy: number;
    Icd:      string;
    IcdName:  string;
    ProfName: string;
    Ranking:  number;
}

export interface Specialisation {
    ID:           number;
    Name:         string;
    SpecialistID: number;
}

export interface DiagnosisDescriptionInterface {
  Description: string;
  DescriptionShort: string;
  MedicalCondition: string;
  Name: string;
  PossibleSymptoms: string;
  ProfName: string;
  Synonyms: string | null;
  TreatmentDescription: string;
}


export interface SpecialistsInterface {
  ID: number;
  Name: string;
  Accuracy: number;
  Ranking: number;
}