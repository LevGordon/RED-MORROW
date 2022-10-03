import "./App.css";
import Layout from "./Home/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Layout />
      </Route>
    </Routes>
  );
}

export default App;
