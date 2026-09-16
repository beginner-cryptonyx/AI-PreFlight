import { type Finding } from "./types";

const creditCardRegex = /\b(?:\d[ -]*?){13,19}\b/g;

function regexCreditCardCheck(text: string) {
  const matches = text.matchAll(creditCardRegex);
const PotantialViolations: { start: number; end: number }[] = [];


  for (const match of matches) {
    const startIndex = match.index;
    const endIndex = startIndex + match[0].length;
    PotantialViolations.push({ start: startIndex, end: endIndex });
  }

  return PotantialViolations
}

function Luhn(text: string) {
  const digits = text.replace(/\D/g, "");

  let sum = 0;
  let doubleDigit = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (doubleDigit) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
}

export default function creditCardScan(text:string):Finding[]{
const Violations: Finding[] = [];
const Candidates:{ start: number; end: number }[] = regexCreditCardCheck(text)

for (const candidate of Candidates){
    const TrialText = text.slice(candidate.start, candidate.end)
    if (Luhn(TrialText)) {
        Violations.push({
            label: "Credit card number",
            severity: "critical",
            start: candidate.start,
            end: candidate.end
        } as Finding)
    }
}
return Violations
}