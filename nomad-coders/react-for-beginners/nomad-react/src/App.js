import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Home, About, KakaoMap, Sample } from "./pages";

import "./styles/global.css";

function Profile() {
  const { username } = useParams();
  return <h1>{username}의 프로필</h1>;
}

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<KakaoMap />}></Route>
          <Route path="/test" element={<Sample />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
