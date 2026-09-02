export type Severity = "low" | "medium" | "high" | "critical";

export interface Finding {
    label: string;
    severity: Severity;
    lineNumber: number;
    columnNumber: number;
    match: string;
}