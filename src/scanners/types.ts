export type Severity = "low" | "medium" | "high" | "critical";

export interface Finding {
    id: string;
    label: string;
    severity: Severity;
    filePath: string;
    lineNumber: number;
    columnNumber: number;
}