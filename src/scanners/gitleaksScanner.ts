import { load } from "js-toml";
import regexFile from "./regex/gitleaks.toml?raw";
import { type Finding } from "./types";
import { RE2Set, RE2JS } from "re2js";

interface rule {
  description: string;
  entropy: number;
  id: string;
  keywords: string[];
  regex: string;
}

const parsedData = load(regexFile);
const rulesArray = parsedData.rules as rule[];

const regexSet = new RE2Set();
const compiledSet: { rule: rule; regex: RE2JS }[] = [];

rulesArray.forEach((rule) => {
  try {
    const regex = RE2JS.compile(rule.regex);
    regexSet.add(rule.regex);
    compiledSet.push({ rule: rule, regex: regex });
  } catch (error) {
    console.log("could not add", rule.id, error);
  }
});

export default function gitleaksScan(text: string) {
  const Violations: Finding[] = [];
  const matchedIndices = regexSet.match(text);

  for (const i of matchedIndices) {
    const { rule, regex } = compiledSet[i];
    const matcher = regex.matcher(text);

    while (matcher.find()) {
      Violations.push({
        label: rule.id,
        severity: "high",
        match: matcher.group(),
        start: matcher.start(),
        end: matcher.end(),
      } as Finding);
    }
  }
  return Violations
}
