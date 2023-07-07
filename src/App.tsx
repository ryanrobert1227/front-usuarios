import { useState } from "react";
import { Outlet } from "react-router-dom";

import { GlobalStyle } from "./App";

function App() {
  const [aviso, setAviso] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Outlet />
      {aviso && (
        <div className="aviso">
          <h1>Aviso!!</h1>
          <p>
            {" "}
            Esse site foi feito apenas para estudo, por favor nao coloque seus{" "}
            <strong>email</strong> e <strong>senhas</strong> reais. Pois as
            informações guardadas não estão seguras!! Obrigado.
          </p>
          <button
            onClick={() => {
              setAviso(false);
            }}
          >
            Ir para o Site
          </button>
        </div>
      )}
    </>
  );
}

export default App;
