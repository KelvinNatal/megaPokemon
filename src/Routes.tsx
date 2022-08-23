import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./Page/Principal/index";
import Principalscroll2 from "./Page/PrincipalScroll2";

const Routte = () => {

    return(
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Principal/>} />
        <Route path="/botaocarregar" caseSensitive={false} element={<Principalscroll2/>} />
      </Routes>
    </Router>
    );

};

export default Routte;