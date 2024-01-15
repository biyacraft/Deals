import SideBar from "./components/SideBar";
import Logo from "./components/Logo";
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
            <div className="w-2/3 justify-around">
              <div className="">
              <img className="bg-cover" src="cover.svg" alt="" />
              <div className="flex justify-around">
              <img className="bg-primary rounded-full w-8 h-8 p-1 m-2" src="edit-button.svg" alt="" />
              <img className="bg-primary rounded-full w-8 h-8 p-1 m-2" src="delete.svg" alt="" />
              </div>
              </div>
              <div className="flex-col">
                <div className="flex items-center my-4">
                  <div className="flex-col w-1/2">
                    <h2 className="text-secondary font-bold">First Name</h2>
                    <input type="text" placeholder="Eyob"/>
                  </div>
                  <div className="flex-col w-1/2">
                    <h2 className="text-secondary font-bold">Last Name</h2>
                    <input type="text" placeholder="Abate"/>
                  </div>
                </div>
                <div className="flex items-center my-4">
                  <div className="flex-col w-1/2">
                    <h2 className="text-secondary font-bold">Email</h2>
                    <input type="email" name="email" id="" placeholder="eyobabate@gmail.com"/>
                  </div>
                  <div className="flex-col w-1/2">
                    <h2 className="text-secondary font-bold">Phone</h2>
                    <input type="number" placeholder="0911121314"/>
                  </div>
                </div>
                <div className="flex-col items-center my-4">
                    <h2 className="text-secondary font-bold">Address</h2>
                    <input className="w-full border-primary" type="text" placeholder="Bonga"/>
                </div>
                <div className="flex">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="State" />
                  <input type="number" name="zipcode" id="" placeholder="Zip Code"/>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full flex-col">
            <div className="flex items-center justify-between p-3">
            <h1 className="text-secondary font-bold">Recent Deals</h1>
            <div className="bg-primary rounded-full w-15 h-15 items-center ">
            <img className="w-10 h-10 p-3" src="add.svg" alt="" />
            </div>
            </div>
            <div className="flex-col">
              <div className="flex items-center gap-4 my-4">
                <div className="">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                </div>
                <div className="w-full">
                  <h2 className="text-secondary font-bold">Lorem, ipsum dolor.</h2>
                  <div className="flex text-gray-600 items-start justify-between">
                    <p>Nov 14 . $6000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 my-4">
                <div className="">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                </div>
                <div className="w-full">
                  <h2 className="text-secondary font-bold">Lorem, ipsum dolor.</h2>
                  <div className="flex text-gray-600 items-start justify-between">
                    <p>Nov 14 . $6000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 my-4">
                <div className="">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                </div>
                <div className="w-full">
                  <h2 className="text-secondary font-bold">Lorem, ipsum dolor.</h2>
                  <div className="flex text-gray-600 items-start justify-between">
                    <p>Nov 14 . $6000</p>
                  </div>
                </div>
              </div>
              <div className="flex text-secondary items-center justify-around">
                <button className="">Load More</button>
              </div>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails