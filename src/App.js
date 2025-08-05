import { BrowserRouter, Routes, Route } from "react-router"
import MainPage from "./pages/MainPage/MainPage";
import GasolineTools from "./pages/gasolineTools/GasolineTools";
import ElectroTools from "./pages/electroTools/ElectroTools";
import RulerTools from "./pages/rulerTools/RulerTools";
import Chainsaws from "./pages/Chainsaws";
import BrushCutters from "./pages/BrushCutters";
import Generators from "./pages/Generators";
import CuttingTools from "./pages/CuttingTools";
import DrillingAndFastening from "./pages/DrillingAndFastening";
import GrindingAndPolishing from "./pages/GrindingAndPolishing";
import WoodWorking from "./pages/WoodWorking";
import ConstructionAndFinishing from "./pages/ConstructionAndFinishing";
import Measuring from "./pages/Measuring";
import AdminPanel from "./pages/AdminPanel";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/gasolineTools" element={<GasolineTools />} />
          <Route path="/electroTools" element={<ElectroTools />} />
          <Route path="/rulerTools" element={<RulerTools />} />
          <Route path="/gasolineTools/Chainsaws" element={<Chainsaws />} />
          <Route path="/gasolineTools/BrushCutters" element={<BrushCutters />} />
          <Route path="/gasolineTools/Generators" element={<Generators />} />
          <Route path="/electroTools/CuttingTools" element={<CuttingTools />} />
          <Route path="/electroTools/DrillingAndFastening" element={<DrillingAndFastening />} />
          <Route path="/electroTools/GrindingAndPolishing" element={<GrindingAndPolishing />} />
          <Route path="/electroTools/WoodWorking" element={<WoodWorking />} />
          <Route path="/electroTools/ConstructionAndFinishing" element={<ConstructionAndFinishing />} />
          <Route path="/rulerTools/Measuring" element={<Measuring />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;