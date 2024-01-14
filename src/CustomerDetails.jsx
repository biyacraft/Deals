import SideBar from "./components/SideBar";
import Logo from "./components/Logo"
const CustomerDetails = () => {
  return (
    <div className="flex-col">
      
    <nav className="flex bg-white justify-between items-center p-3">
        <div className=" ">
          <Logo />
        </div>
        <div className="flex w-full h-full p-5">
            <h1 className="!text-secondary font-bold text-2xl"><strong>Customer Details</strong></h1>
        </div>
        <div className="flex items-center justify-between gap-4">
        
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
        <div className="flex w-full">
            <div className="back w-2/3 justify-around">
              
              <div className="bg-white w-15 h-15 absolute rounded-full">
              <img className="bg-primary rounded-full w-8 h-8 p-1" src="edit-button.svg" alt="" />
              </div>
              <div></div>
            </div>
            <div className="w-1/3"></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails