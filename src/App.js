import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CV from "./components/Cv/Cv";
import CVEn from "./components/Cv/CvEn";
import CVDe from "./components/Cv/CvDe";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/cv-fr" element={<CV />} />
                <Route path="/cv-en" element={<CVEn />} />
                <Route path="/cv-de" element={<CVDe />} />
            </Routes>
        </Router>
    );
}

export default App;
