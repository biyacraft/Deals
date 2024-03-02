const RecentDeals = () => {
    return (
    <div className="p-4 bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between p-1">
            <h1 className="text-secondary font-bold">Recent Deals</h1>
            <button className="text-gray-600">Veiw All</button>
        </div>
        <div>
            <div className="flex items-center gap-4 my-4">
                <div className="">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                    <div className="w-full">
                        <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
                        <div className="flex text-gray-600 items-start justify-between">
                            <p>Lorem, ipsum.</p>
                            <p>Nov 14, 07:00AM</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 my-4">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                    <div className="w-full">
                        <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
                        <div className="flex text-gray-600 items-start justify-between">
                            <p>Lorem, ipsum.</p>
                            <p>Nov 14, 07:00AM</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 my-4">
                    <img className="rounded-full w-12 h-12" src="user.png" alt="" />
                    <div className="w-full">
                        <h2 className="text-secondary font-bold">Lorem, ipsum.</h2>
                        <div className="flex text-gray-600 items-start justify-between">
                            <p>Lorem, ipsum.</p>
                            <p>Nov 14, 07:00AM</p>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}
export default RecentDeals
