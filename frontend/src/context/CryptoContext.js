import { useState, createContext } from "react";

const CryptoContext = createContext([{}, () => {}]);

const CryptoProvider = (props) => {
  const [auth, setAuth] = useState({
    token: "",
    auth: false,
  });

  return (
    <CryptoContext.Provider value={[auth, setAuth]}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
