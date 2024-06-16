import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import VideoPreview from "./pages/VideoPreview/VideoPreview";
import Shorts from "./pages/Shorts/Shorts";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-preview" element={<VideoPreview />} />
        <Route path="/shorts" element={<Shorts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
