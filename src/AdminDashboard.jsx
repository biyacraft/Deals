import { Link } from "react-router-dom";
import SideBar from "./components/SideBar";

const AdminDashboard = () => {
  return (
    <div className="flex-col">
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
            <div>
                <h1 className=""><strong className="text-secondary">Hey Brex</strong> Lorem ipsum</h1>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard