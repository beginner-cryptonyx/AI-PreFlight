import { scanText } from "../scanners";

export default function ScanInput() {
  return (
    <textarea
      id="text-input"
      placeholder="Enter text to scan..."
      onChange={(e) => {
        const findings = scanText(e.target.value);
        console.log(findings);
      }}
    />
  );
}
