import DashboardComp from "./DashboardComp"
import SideBarr from "./SideBarr"

const SideBar = () => {
  
  
    return (
    <div className="flex">
        <SideBarr />
        <div className="w-2/3">
        <DashboardComp />
        </div>
        <div className="w-1/3 p-4">
        <div className="flex-col">
            <div className="flex justify-between">
                <h1 className="text-secondary font-bold">Customers</h1>
                <button className="text-gray-600">View All</button>
            </div>
        <div className="flex-col gap-2">
            <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Eyob Abate</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>eyobabate@gmail.com</p>
            <button>
                <img src="edit-button.svg" alt="" />
            </button>
            </div>
        </div>
        </div>
        <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Gashewu Meketa</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>gashawmeketa@gmail.com</p>
            <button>
                <img src="edit-button.svg" alt="" />
            </button>
            </div>
        </div>
        </div>
        <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Brihane Hailay</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>BrihaneHailay@gmail.com</p>
            <button>
                <img src="edit-button.svg" alt="" />
            </button>
            </div>
        </div>
        </div>
            </div>
        </div>
        <div className="tasksTODo flex-col p-6 pt-6 ">
        <div className="flex justify-between gap-4">
                <h1 className="text-secondary font-bold">Tasks To do</h1>
                <button className="text-gray-600">View All</button>
        </div>
        <div className="flex-col justify-between items-start py-4">
            <div className="flex justify-between py-4">
            <div className="flex gap-4">
                <p className="text-red-500">30 Nov 2021</p>
                <img className="w-5 h-5" src="warning.svg" alt="" />
            </div>
            <div className="text-secondary">Meeting with Partners</div>
            </div>
            <div className="flex justify-between py-4">
            <div className="flex gap-4">
                <p className="text-red-500">30 Nov 2021</p>
                <img className="w-5 h-5" src="warning.svg" alt="" />
            </div>
            <div className="text-secondary">Meeting with Partners</div>
            </div>
            <div className="flex justify-between py-4">
            <div className="flex gap-4">
                <p className="text-gray-600">24 Dec 2021</p>
                <img className="w-5 h-5" src="warning.svg" alt="" />
            </div>
            <div className="text-secondary">Lunch With Steve</div>
            </div>
            <div className="flex justify-between py-4">
            <div className="flex gap-4">
                <p className="text-gray-600">24 Dec 2021</p>
                <img className="w-5 h-5" src="warning.svg" alt="" />
            </div>
            <div className="text-secondary">Meeting With Partners</div>
            </div>
            <div className="flex justify-between py-4">
            <div className="flex gap-4">
                <p className="text-gray-600">24 Dec 2021</p>
                <img className="w-5 h-5" src="warning.svg" alt="" />
            </div>
            <div className="text-secondary">Weekly Meeting</div>
            </div>
        </div>
        <div className="flex justify-between">
            <h1 className="text-gray-600 font-bold">Add New Task</h1>
            <button>
                <img src="Right-button.svg" alt="" />
            </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar
