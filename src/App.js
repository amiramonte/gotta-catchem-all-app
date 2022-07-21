import React from "react";
import { CssBaseline } from "@mui/material";
import ButtonAppBar from "./components/navbar";
import Counter from './components/counter';


function App() {
  return (
    <div>
      <CssBaseline/>
      <ButtonAppBar />
      <h1>Welcome React Test</h1>
      <Counter/>
    </div>
  );
}

export default App;
