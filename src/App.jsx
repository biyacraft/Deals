import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Deals from './Deals';
import DealDetails from './DealDetails';
import EditDeal from './EditDeal';
import Customer from './Customer';
import CustomerDetails from './CustomerDetails';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/Deals' element={<Deals />}></Route>
            <Route path='/DealDetails' element={<DealDetails />}></Route>
            <Route path='/EditDeal' element={<EditDeal />}></Route>
            <Route path='/Customer' element={<Customer />}></Route>
            <Route path='/CustomerDetails' element={<CustomerDetails />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App