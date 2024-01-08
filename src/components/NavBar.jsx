import Logo from "./Logo"

const NavBar = () => {
  return (
    
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
            <button className="flex items-center justify-around h-10 w-15">
                Add New
                <div className="p-3">
                <img className="w-3" src="add.svg" alt="" />
                </div>
                </button>
                </div>
        </div>
        <div className="flex w-6 h-6">
            <img src="search.svg" alt="" />
        </div>
        <div className="w-10 h-10">
            <img src="user.png" className="rounded-full"  alt="" />
        </div>
        </div>
    </nav>
  )
}

export default NavBar

