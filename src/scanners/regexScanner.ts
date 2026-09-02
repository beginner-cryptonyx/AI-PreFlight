import { patterns } from "./patterns";
import type { Finding } from "./types";

export function regexScanner(text: string): Finding[] {
  const findings: Finding[] = [];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern.regex)) {
      if (match.index === undefined) {
        continue;
      }
      findings.push({
        label: pattern.label,
        severity: pattern.severity,
        columnNumber: match.index ?? 0,
        lineNumber: match.index + match[0].length,
        match: match[0],
      });
    }
  }
  return findings;
}
