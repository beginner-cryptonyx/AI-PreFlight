import ScanInput from "./components/ScanInput";
import { scanText } from "./scanners";
import creditCardScan from "./scanners/creditCardScanner";
import gitleaksScan from "./scanners/gitleaksScanner";

function App() {
  console.log("TEST-1: API KEY", gitleaksScan("A3-ABC123-ABCDEFGHIJK-ABCDE-12345-Z9X8W"))
  console.log("TEST-2: CREDIT CARD", creditCardScan("4111111111111111"))
  return (
    <>
      <div className="App">
        <h1>AI PreFlight</h1>
        {/* <ScanInput /> */}
      </div>

    </>
  )
}

export default App
