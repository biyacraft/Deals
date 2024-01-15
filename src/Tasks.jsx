import { Link } from "react-router-dom"
import Logo from "./components/Logo"
import SideBar from "./components/SideBar"

const Tasks = () => {
  return (
    <div className="flex-col">
        <nav className="flex bg-white justify-between items-center p-3">
            <div className=" ">
                <Logo />
            </div>
            <div className="flex w-full h-full p-5">
                <h1 className="!text-secondary font-bold"><strong>Dashboard</strong></h1>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex bg-primary text-white rounded-xl items-center justify-around w-40 h-auto p-1 m-1">
                    <div>
                        <Link to="/AddNewTask">
                            <button className="flex items-center justify-around h-10 w-15">
                                Add New Task
                                <div className="p-3">
                                    <img className="w-3" src="add.svg" alt="" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex w-6 h-6">
                    <button>
                        <img src="search.svg" alt="" />
                    </button>
                </div>
                <div className="w-10 h-10">
                    <button>
                        <img src="user.png" className="rounded-full"  alt="" />
                    </button>
                </div>
            </div>
        </nav>
        <div className="flex">
            <SideBar />
            <div className="flex-col w-full">
                <div className="flex w-full justify-between p-3 px-6">
                   <h2 className="text-secondary font-bold">Total: 23 Tasks</h2>
                   <div className="flex gap-4">
                        <div className="flex gap-4">
                            <h2>Sort by</h2>
                            <button>
                                <img src="arrow-down.svg" alt="" />
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <h2>Filter</h2>
                            <button>
                                <img src="filter.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="flex justify-between p-4 px-6">
                        <img src="tick-gray.svg" alt="" />
                        <h2>Due Date</h2>
                        <h2 className="w-3/4">Task</h2>
                        <h2>Edit</h2>
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="warning.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="warning.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className="flex justify-between p-4 px-6">
                        <img className="w-6 h-6" src="tick-green.svg" alt="" />
                        <h2>14 Nov 2021</h2>
                        <p className="w-3/4">Description goes here.</p>
                        <img src="edit-button.svg" alt="" />
                    </div>
                    <div className=" text-secondary font-bold flex justify-center items-center p-3 py-6">
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks