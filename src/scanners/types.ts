export type Severity = "low" | "medium" | "high" | "critical";

export interface Finding {
    label: string;
    severity: Severity;
    start: number;
    end: number;
    match: string;
}