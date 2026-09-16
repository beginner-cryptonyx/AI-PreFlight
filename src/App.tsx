import ScanInput from "./components/ScanInput";
import { scanText } from "./scanners";
import gitleaksScan from "./scanners/gitleaksScanner";

function App() {
  console.log("TEST-1: API KEY", gitleaksScan("A3-ABC123-ABCDEFGHIJK-ABCDE-12345-Z9X8W"))
  console.log("TEST-2: CREDIT CARD", gitleaksScan("A3-ABC123-ABCDEFGHIJK-ABCDE-12345-Z9X8W"))
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
