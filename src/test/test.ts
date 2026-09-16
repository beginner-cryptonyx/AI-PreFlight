import creditCardScan from "../scanners/creditCardScanner";
import gitleaksScan from "../scanners/gitleaksScanner";
import visualise from "../utils/visualise";

const TestString = `
A3-ABC123-ABCDEFGHIJK-ABCDE-12345-Z9X8W

Luhn Positive:
4111-1111-1111-1111
4012888888881881
5555 5555 5555 4444
378282246310005
6011-1111-1111-1117

Luhn Negative:
4111111111111112
5555555555554445
4012-8888-8888-1882

Pure Fail:
4111-1111-1111
4111 1111 1111 1111 12345 //not this one tho ;)
`
export default function Test(){
    const gls = gitleaksScan(TestString)
    const ccs = creditCardScan(TestString)
    console.log("API KEYS FOUND: ", gls, visualise(TestString, gls))
    console.log("CREDIT CARDS FOUND: ", ccs, visualise(TestString, ccs))
}

