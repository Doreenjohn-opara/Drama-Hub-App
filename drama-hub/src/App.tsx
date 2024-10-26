import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import React, {FC} from 'react';

const App:FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  )
}

export default App;