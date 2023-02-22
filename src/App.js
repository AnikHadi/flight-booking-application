import GetDataFromStore from "./Component/GetDataFromStore/GetDataFromStore";
import Header from "./Component/Header/Header";
import InputSection from "./Component/InputSection/InputSection";

function App() {
  return (
    <div className="App">
      <Header />
      <InputSection />
      <GetDataFromStore />
    </div>
  );
}

export default App;
