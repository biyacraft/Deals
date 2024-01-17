import { Link } from "react-router-dom";
import SideBar from "./components/SideBar";

const AdminDashboard = () => {
  return (
    <div>
        <nav className="flex bg-white justify-between items-center p-3">
            <div className="flex w-full h-full p-5">
                <h1 className="text-secondary text-2xl font-semibold"><strong>Admin Dashboard</strong></h1>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex w-6 h-6">
                    <button>
                    <img src="search.svg" alt="" />
                    </button>
                </div>
                <div className="w-10 h-10">
                    <Link to="/Profile">
                        <button>
                            <img src="user.png" className="rounded-full"  alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <h1 className=""><strong className="text-secondary">Hey Brex</strong> Lorem ipsum</h1>
                <div className="flex gap-4 p-4">
                    <div className="flex-col w-1/4 p-4 bg-gray-300 rounded-2xl">
                        <h1 className="text-gray-600 py-2">TODAYS SALE</h1>
                        <div className="flex justify-between w-full py-2">
                            <h2 className="text-black font-bold text-2xl">$12,426</h2>
                            <h2 className="flex gap-2 text-green-600 items-center">+ 36% <svg width="12" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08325 4.66667L4.99992 1.75M4.99992 1.75L7.91659 4.66667M4.99992 1.75V9.25" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </h2>
                        </div>
                    </div>
                    <div className="flex-col w-1/4 p-4 bg-gray-300 rounded-2xl">
                        <h1 className="text-gray-600 py-2">TODAYS SALE</h1>
                        <div className="flex justify-between w-full py-2">
                            <h2 className="text-black font-bold text-2xl">$12,426</h2>
                            <h2 className="flex gap-2 text-green-600 items-center">+ 36% <svg width="12" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08325 4.66667L4.99992 1.75M4.99992 1.75L7.91659 4.66667M4.99992 1.75V9.25" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </h2>
                        </div>
                    </div>
                    <div className="flex-col w-1/4 p-4 bg-gray-300 rounded-2xl">
                        <h1 className="text-gray-600 py-2">TODAYS SALE</h1>
                        <div className="flex justify-between w-full py-2">
                            <h2 className="text-black font-bold text-2xl">$12,426</h2>
                            <h2 className="flex gap-2 text-green-600 items-center">+ 36% <svg width="12" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08325 4.66667L4.99992 1.75M4.99992 1.75L7.91659 4.66667M4.99992 1.75V9.25" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </h2>
                        </div>
                    </div>
                    <div className="flex-col w-1/4 p-4 bg-gray-300 rounded-2xl">
                        <h1 className="text-gray-600 py-2">TODAYS SALE</h1>
                        <div className="flex justify-between w-full py-2">
                            <h2 className="text-black font-bold text-2xl">$12,426</h2>
                            <h2 className="flex gap-2 text-green-600 items-center">+ 36% <svg width="12" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08325 4.66667L4.99992 1.75M4.99992 1.75L7.91659 4.66667M4.99992 1.75V9.25" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex p-4">
                    <div className="flex-col w-2/3">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-xl">Sales Report</h1>
                            <div className=" flex gap-4">
                                <h2 className="font-semibold">12 Months</h2>
                                <h2>6 Months</h2>
                                <h2>30 Days</h2>
                                <h2>7 Days</h2>
                            </div>
                            <div className="flex w-1/4 gap-1">
                                <img src="Download.svg" alt="" />
                                <h1>Export pdf</h1>
                            </div>
                        </div>
                        <img src="graph.svg" alt="" />
                    </div>
                    <div className="w-1/3 flex-col">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-0.5xl">Sale Pie Chart</h1>
                            <h1 className="flex gap-2">Last Seven Days <img src="arrow-down.svg" alt="" /></h1>
                        </div>
                        <img src="pie.svg" alt="" />
                    </div>
                </div>
                <div className="px-5 flex">
                    <div className="flex-col w-2/3">
                        <div className="py-4">
                            <div className="flex justify-between">
                                <h1 className="font-bold">Newly Added Employes</h1>
                                <h2 className="flex gap-1">View All Employees <img src="Right-button.svg" alt="" /></h2>
                            </div>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="pb-8 flex justify-between">
                           
                            <h2 className="font-semibold">Eyob Abata</h2>
                            <h2 className="font-semibold">eyobabata@gmail.com</h2>
                            <Link to="/EmployeeDetail">
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                                <h2>Veiw Details</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="pb-8 flex justify-between">
                            <h2 className="font-semibold">Eyob Abata</h2>
                            <h2 className="font-semibold">eyobabata@gmail.com</h2>
                            <Link to="/EmployeeDetail">
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                                <h2>Veiw Details</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="pb-8 flex justify-between">
                            <h2 className="font-semibold">Eyob Abata</h2>
                            <h2 className="font-semibold">eyobabata@gmail.com</h2>
                            <Link to="/EmployeeDetail">
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                                <h2>Veiw Details</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="pb-8 flex justify-between">
                            <h2 className="font-semibold">Eyob Abata</h2>
                            <h2 className="font-semibold">eyobabata@gmail.com</h2>
                            <Link to="/EmployeeDetail">
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                                <h2>Veiw Details</h2>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="px-8">
                        <div className="">
                            <h2 className="font-semibold">Newly Added Customer</h2>
                            <h2 className="text-gray-600">Lorem, ipsum dolor.</h2>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <div className="">
                                <img className="rounded-full w-12 h-12" src="customer.svg" alt="" />
                            </div>
                            <div className="w-full">
                                <h2 className="text-secondary font-bold">Customer 1</h2>
                                <div className="flex text-gray-600 items-start justify-between">
                                    <p>customer@gmail.com</p>
                                    <p>06/14/24</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <div className="">
                                <img className="rounded-full w-12 h-12" src="customer.svg" alt="" />
                            </div>
                            <div className="w-full">
                                <h2 className="text-secondary font-bold">Customer 1</h2>
                                <div className="flex text-gray-600 items-start justify-between">
                                    <p>customer@gmail.com</p>
                                    <p>06/14/24</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 my-4">
                            <div className="">
                                <img className="rounded-full w-12 h-12" src="customer.svg" alt="" />
                            </div>
                            <div className="w-full">
                                <h2 className="text-secondary font-bold">Customer 1</h2>
                                <div className="flex text-gray-600 items-start justify-between">
                                    <p>customer@gmail.com</p>
                                    <p>06/14/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard