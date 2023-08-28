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