import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
const Customer = () => {
    return (
        <div className="flex-col">
            <nav className="flex bg-white justify-between items-center p-3">
                <div className=" ">
                    <Logo />
                </div>
                <div className="flex w-full h-full p-5">
                    <h1 className="text-secondary text-3xl font-bold"><strong>Customers</strong></h1>
                </div>
                <div className="flex items-center justify-between gap-4 w-1/4">
                    <div className="flex bg-primary text-white rounded-xl items-center justify-around p-1 m-1">
                        <button className="flex items-center w-full">
                            Add New Customer
                        </button>
                        <div className="p-3">
                            <img className="w-3" src="add.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex w-6 h-6">
                        <button>
                            <img src="search.svg" alt="" />
                        </button>
                    </div>
                    <Link to="/Profile">
                        <div className="w-10 h-10">
                            <img src="user.png" className="rounded-full" alt="" />
                        </div>
                    </Link>
                </div>
            </nav>
            <div className="flex">
                <SideBar />
                <div className="flex-col w-full p-4">
                    <div className="flex  justify-between p-8">
                        <h1 className="text-secondary font-bold">Total: 78 Customers</h1>
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
                        
                        <div className="flex">
                            
                            <div className="flex-col w-full p-4">
                                
                                <div className="flex-col px-8 w-full">
                                    <div className="flex w-full gap-10 text-gray-600 p-4 my-4">
                                        <div className="flex gap-8 w-2/6">
                                            <img src="name.svg" alt="" />
                                            <h2>Name</h2>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <h2>Email</h2>
                                            <h2 className="pl-7 ml-7">Phone</h2>
                                            <h2 className="pl-7 ml-7">Address</h2>
                                            <h2>Edit</h2>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center  text-gray-600 p-2 my-4">
                                        <div className="flex gap-3 w-1/4 items-center">
                                            <Link to="/CustomerDetails">
                                                <img src="random-pic.svg" alt="" />
                                            </Link>
                                            <h2>Eyob Abata</h2>
                                        </div>
                                        <div className="flex justify-between w-3/4">
                                            <h2 className="pl-7">eyobabata@gmail.com</h2>
                                            <h2>0912131415</h2>
                                            <h2>Address</h2>
                                            <img src="edit-button.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex text-secondary justify-center p-8 my-4">
                                        <button>Load More</button>
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
export default Customer
