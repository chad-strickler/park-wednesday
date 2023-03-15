import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Layout from "./views/Layout";
import Home from "./views/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
