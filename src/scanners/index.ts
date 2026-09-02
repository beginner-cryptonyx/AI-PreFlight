import { regexScanner } from "./regexScanner";
import type { Finding } from "./types";

export function scanText(text: string): Finding[] {
    const findings: Finding[] = [
        ...regexScanner(text)
    ]
    return findings.sort((a, b) => a.start - b.start);
}