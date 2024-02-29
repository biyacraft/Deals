import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Deals from './Deals';
import DealDetails from './DealDetails';
import EditDeal from './EditDeal';
import Customer from './Customer';
import CustomerDetails from './CustomerDetails';
import Tasks from './Tasks';
import AddNewTask from './AddNewTask';
import Calander from './Calander';
import Profile from './Profile';
import AdminDashboard from './AdminDashboard';
import EmployeeDetail from './EmployeeDetail';


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
            <Route path='/Tasks' element={<Tasks />}></Route>
            <Route path='/AddNewTask' element={<AddNewTask />}></Route>
            <Route path='/Calander' element={<Calander />}></Route>
            <Route path='/Profile' element={<Profile />}></Route>
            <Route path='/AdminDashboard' element={<AdminDashboard />}></Route>
            <Route path='/EmployeeDetail' element={<EmployeeDetail />}></Route>
            <Route path='/notification'></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App