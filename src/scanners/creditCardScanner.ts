import { type Finding } from "./types";

const creditCardRegex = /\b(?:\d[ -]*?){13,19}\b/
const PotantialViolations:{start:number, end:number}[] = []
const Violations:Finding[] = []

function regexCreditCardCheck(text:string){
    const matches = text.matchAll(creditCardRegex)

    for (const match of matches){
        const startIndex = match.index;
        const endIndex = startIndex + match[0].length;
        PotantialViolations.push({start:startIndex, end:endIndex})
    }
}

