import ScanInput from "./components/ScanInput";
import { scanText } from "./scanners";
import gitleaksScan from "./scanners/gitleaksScanner";

function App() {
  console.log(gitleaksScan("A3-ABC123-ABCDEFGHIJK-ABCDE-12345-Z9X8W"))
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
