import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  </BrowserRouter>
}




export default App;
