import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Deals from './Deals';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/Deals' element={<Deals />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App