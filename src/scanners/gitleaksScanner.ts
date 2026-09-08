import { load } from "js-toml";
import regex from "./regex/gitleaks.toml?raw";

export default function gitleaksScan() {
  try {
    const parsedData = load(regex);
    console.log(parsedData);
    
  } catch (err) {
    console.error(err);
  }
}
