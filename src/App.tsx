import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import SearchProfile from "./routes/SearchProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
