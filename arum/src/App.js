import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SeccionHeader } from "./components/seccionHeader.js";

import { Navegacion } from "./components/navigation.js";
import { MenuNavegacion } from "./components/navMenu.js";

function App() {

  const [rol] = useState('admin')
  

  return (
    <>
      <SeccionHeader/> 
       

      <BrowserRouter>

        <MenuNavegacion rol ={rol} />
        <Navegacion rol ={rol} />

      </BrowserRouter>

    </>


  );
}

export default App;