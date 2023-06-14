import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";

function App() {
  const [loader, setLoader] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3500);
  }, [nav]);

  return (
    <AnimatePresence wait>
      {loader ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
