import { Link } from "react-router-dom"
import SideBar from "./components/SideBar"
import Logo from "./components/Logo"

const Deals = () => 
{

  return (
    <div className="flex-col">
        <nav className="flex bg-white justify-between items-center p-3">
            <div className=" ">
                <Logo />
            </div>
            <div className="flex w-full h-full p-5">
                <h1 className="text-secondary text-3xl font-bold"><strong>Deals</strong></h1>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex bg-primary text-white rounded-xl items-center justify-around w-40 h-auto p-1 m-1">
                    <Link to="/DealDetails">
                        <button className="flex items-center justify-around h-10 w-15">
                            Add New
                            <div className="p-3">
                                <img className="w-3" src="add.svg" alt="" />
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="flex w-6 h-6">
                    <button>
                        <img src="search.svg" alt="" />
                    </button>
                </div>
                <div className="w-10 h-10">
                    <Link to="../Profile">
                    <button>
                        <img src="user.png" className="rounded-full"  alt="" />
                    </button>
                    </Link>
                </div>
            </div>
        </nav>
        <div className="flex">
            <SideBar />
            <div className="flex-col w-full p-4">
                <div className="flex  justify-between p-8">
                    <h1 className="text-secondary font-bold">Total: 136 Deals</h1>
                    <div className="flex gap-8">
                        <div className="flex gap-2">
                            <h2>Sort by:  Date created</h2>
                            <img src="arrow-down.svg" alt="" />
                        </div>
                        <div className="flex gap-2">
                            <h2>Filter</h2>
                            <img src="filter.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex-col px-8">
                    <div className="flex w-full justify-between text-gray-600">
                        <div className="flex gap-3 w-2/5">
                            <img src="vuesax.svg" alt="" />
                        <h2>Name</h2>
                        </div>
                        <div className="flex justify-between w-3/5">
                            <h2>Room Area</h2>
                            <h2>Appointment Date</h2>
                            <h2>Amount</h2>
                            <h2>Status</h2>
                            <h2>Edit</h2>
                            </div>
                    </div>
                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <img className="pr-1" src="random-pic.svg" alt="" />
                            <Link to="/DealDetails" >
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2; </h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress </h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>
                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <img className="pr-1" src="random-pic.svg" alt="" />
                            <Link to="/DealDetails">
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2;</h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>

                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <img className="pr-1" src="random-pic.svg" alt="" />
                            <Link to="/DealDetails">
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2;</h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>
                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <img className="pr-1" src="random-pic.svg" alt="" />
                            <Link to="/DealDetails">
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2;</h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>

                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <img className="pr-1" src="random-pic.svg" alt="" />
                            <Link to="/DealDetails">
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2;</h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>

                    <div className="flex py-4 text-primary justify-between items-center">
                        <div className="flex items-center w-2/6">
                            <Link to="/DealDetails">
                                <img className="pr-1" src="random-pic.svg" alt="" />
                                <h2>Location City Eyob Abate</h2>
                            </Link>
                        </div>
                        <h2 className="pl-5">100M&sup2;</h2>
                        <h2>Nov 15, 2021 08:00 AM</h2>
                        <h2>2.4 Million Birr</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                        <Link to="/EditDeal">
                            <img src="edit-button.svg" alt="" />
                        </Link>
                    </div>
                    <div className="flex text-secondary justify-center p-8">
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals