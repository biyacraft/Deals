
const RecentDeals = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex items-start justify-between p-1">
      <div>
      <h1 className="text-secondary font-bold">Recent Deals</h1>
      </div>
      <div>
      <button className="text-gray-600">Veiw All</button>
      </div>
      </div>
    <div className="flex-col">
    <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>Lorem, ipsum.</p>
            <p>Nov 14, 07:00AM</p>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>Lorem, ipsum.</p>
            <p>Nov 14, 07:00AM</p>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>Lorem, ipsum.</p>
            <p>Nov 14, 07:00AM</p>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-4 my-4">
        <div className="">
            <img className="rounded-full w-12 h-12" src="user.png" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
            <div className="flex text-gray-600 items-start justify-between">
            <p>Lorem, ipsum.</p>
            <p>Nov 14, 07:00AM</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default RecentDeals