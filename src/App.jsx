import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Search from './view/Search.jsx';
import Home from './view/Home.jsx';
import Community from './view/Community.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/community' element={<Community/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
