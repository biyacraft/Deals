
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"

const Deals = () => {

  return (
    <div className="flex-col">
    <div>
     <NavBar />
     </div>
     <div className="flex">
     <SideBar />
     <div className="flex-col w-full p-4">
        <div className="flex  justify-between">
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
        <div>Hello</div>
     </div>
     </div>
    </div>
  )
}

export default Deals