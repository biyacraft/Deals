import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Deals from './Deals';
import DealDetails from './DealDetails';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/Deals' element={<Deals />}></Route>
            <Route path='/DealDetails' element={<DealDetails />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App