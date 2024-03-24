// import logo from './logo.svg';
// import "./App.css";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Logo from "./components/Logo";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return <div>{isLoading ? <Logo /> : <Main />}</div>;
}

export default App;
