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
        <div className="flex-col">
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
        <div className="tasksTODo">
        </div>
        </div>
    </div>
  )
}

export default SideBar
