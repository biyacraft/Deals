import Nextapp from "./Nextapp"
import RecentDeals from "./RecentDeals"

const DashboardComp = () => {
  return (
    <div className="flex-col ">
      <div>
       <div className="h-full flex gap-3">
        <Nextapp />
          <div className="flex-col w-2/3">
            <RecentDeals />
          </div>
       </div>
      </div>
    <div className="flex">
      <div className="flex-col">
      <div className="flex w-full">
        <div className="w-1/3 flex justify-between items-center ">
          <div className="text-gray-600 text-bold">
            <p className="p-1 my-3">Customers</p>
            <h1 className="p-1 my-3 text-6xl font-bold text-secondary">78</h1>
          </div>
          <div className="p-1 pt-3 items-center">
            <img className="w-20 h-20 pt-3 mt-3" src="customers.svg" alt="" />
          </div>
        </div>
        
      </div>
      <div className="flex w-full">
        <div className="w-1/3 flex justify-between items-center ">
          <div className="text-gray-600 text-bold">
            <p className="p-1 my-3">Deals</p>
            <h1 className="p-1 my-3 text-6xl font-bold text-secondary">136</h1>
          </div>
          <div className="p-1 pt-3 items-center">
            <img className="w-20 h-20 pt-3 mt-3" src="customers-shop.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="w-2/3">
          <div className="flex items-center p-4 gap-1">
            <div>
              <img className="rounded-full w-12 h-12" src="user.png" alt="" />
            </div>
            <div className="flex-col">
              <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
              <p className="text-gray-600">Claveland OH  1234</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
    </div>

    </div>
  )
}

export default DashboardComp
