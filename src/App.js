import React from "react";
import { CssBaseline } from "@mui/material";
import ButtonAppBar from "./components/navbar";
import Counter from './components/counter';


function App() {
  return (
    <div>
      <CssBaseline/>
      <ButtonAppBar />
      <Counter/>
    </div>
  );
}

export default App;
