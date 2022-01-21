import { useState, createContext } from "react";

const CryptoContext = createContext([{}, () => {}]);

const CryptoProvider = (props) => {
  const [auth, saveToken] = useState({
    token: "",
    auth: false,
  });

  return (
    <CryptoContext.Provider value={[auth, saveToken]}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
