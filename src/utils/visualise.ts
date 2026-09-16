import { type Finding } from "../scanners/types";


export default function visualise(text: string, Violations:Finding[]){
    const slices = []
    for (const violation of Violations){
        slices.push(text.slice(violation.start, violation.end))
    }
    return slices
}