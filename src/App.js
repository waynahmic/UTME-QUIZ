import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Side';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mathematic from './components/math/Mathematic';
import English from './components/english/English';
import Physics from './components/physics/Physics';
import Chemistry from './components/chemistry/Chemistry';
import Biology from './components/biology/Biology';
import Crs from './components/crs/Crs';
import Economics from './components/economics/Economics';
import Commerce from './components/commerce/Commerce';
import Government from './components/government/Government'
import MathQuiz from './components/MathQuiz/MathQuiz';
import EnglishQuiz from './components/EnglishQuiz/EnglishQuiz';
import PhysicsQuiz from './components/PhysicsQuiz/PhysicsQuiz';
import ChemistryQuiz from './components/ChemistryQuiz/ChemistryQuiz';
import BiologyQuiz from './components/BiologyQuiz/BiologyQuiz';
import CrsQuiz from './components/CrsQuiz/CrsQuiz';
import EconomicsQuiz from './components/EconomicsQuiz/EconomicsQuiz';
import CommerceQuiz from './components/CommerceQuiz/CommerceQuiz';
import GovernmentQuiz from './components/GovernmentQuiz/GovernmentQuiz';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <BrowserRouter>
    <div className="quiz">
     
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Routes>
          <Route element={<Mathematic/>} path='/'></Route>
          <Route element={<English/>} path='/English'></Route>
          <Route element={<Physics/>} path='/Physics'></Route>
          <Route element={<Chemistry/>} path='/Chemistry'></Route>
          <Route element={<Biology/>} path='/Biology'></Route>
          <Route element={<Crs/>} path='/Crs'></Route>
          <Route element={<Economics/>} path='/Economics'></Route>
          <Route element={<Commerce/>} path='/Commerce'></Route>
          <Route element={<Government/>} path='/Government'></Route>
          <Route element={<MathQuiz/>} path='/mathquiz'></Route>
          <Route element={<EnglishQuiz/>} path='/englishquiz'></Route>
          <Route element={<PhysicsQuiz/>} path='/physicsquiz'></Route>
          <Route element={<ChemistryQuiz/>} path='/chemistryquiz'></Route>
          <Route element={<BiologyQuiz/>} path='/biologyquiz'></Route>
          <Route element={<CrsQuiz/>} path='/crsquiz'></Route>
          <Route element={<EconomicsQuiz/>} path='/economicsquiz'></Route>
          <Route element={<CommerceQuiz/>} path='/commercequiz'></Route>
          <Route element={<GovernmentQuiz/>} path='/governmentquiz'></Route>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
