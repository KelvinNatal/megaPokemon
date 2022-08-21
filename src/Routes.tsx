import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./Page/Principal/index";

const Routte = () => {

    return(
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Principal/>} />
      </Routes>
    </Router>
    );

};

export default Routte;