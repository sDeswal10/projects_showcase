import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-100vh h-full w-full '>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>              
      </div>        
    </BrowserRouter>
  );
}

export default App;
