import type { Severity } from "./types";

export interface Pattern {
  label: string;
  regex: RegExp;
  severity: Severity;
}

export const patterns: Pattern[] = [
  {
    label: "Email Address",
    regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    severity: "medium",
  },
  {
    label: "Social Security Number",
    regex: /\b\d{3}-\d{2}-\d{4}\b/g,
    severity: "critical",
  },
  {
    label: "Possible private key",
    regex: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
    severity: "critical",
  },
  {
    label: "Possible API key",
    regex: /\b(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9_]{20,})\b/g,
    severity: "high",
  },
];
