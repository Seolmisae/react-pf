import Day from "./component/Day";
import Daylist from "./component/Daylist";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Daylist />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/*" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
