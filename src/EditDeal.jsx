
const EditDeal = () => {
  return (
    <div className="bg-black flex items-center justify-center">
        <div className="flex-col w-1/2 h-4/5 p-6 bg-white rounded-2xl my-10">
            <div className="flex p-3 justify-between items-center">
                <h2 className="text-secondary font-bold">Edit Deal</h2>
                <img src="close.svg" alt="" />
            </div>
            <div className="flex-col">
                <div className="flex-col">
                    <h2 classNamen="text-secondary font-bold p-2 my-2">Room Images</h2>
                    <h2 className="text-gray-600 p-2 my-2 pl-4">ADD</h2>
                </div>
                <div className="flex-col">
                    <h2 className="text-secondary font-bold p-2 my-2">Address</h2>
                    <h2 className="text-gray-600 p-2 my-2 pl-4">Street Address</h2>
                </div>
                <div className="flex justify-between p-4 gap-4">
                    <h2 className="p-2">City</h2>
                    <h2 className="p-2">Location</h2>
                    <h2 className="p-2">Woreda</h2>
                </div>
                <div>
                    <div className="flex text-secondary font-bold p-2 my-2 justify-between">
                        <h2 className="">Room Area</h2>
                        <h2 className=""># of Room</h2>
                    </div> 
                    <div className="flex justify-between p-4 gap-4">
                        <h2 className="p-2">25</h2>
                        <h2 className="p-2">4</h2>
                    </div>
                </div>
                <div className="flex-col">
                    <h2 className="text-secondary font-bold p-2 my-2">Appointment Date</h2>
                    <div className="flex justify-between p-4">
                    <h2 className="text-gray-600 p-2 my-2 pl-4">Nov 14, 2021</h2>
                    <img src="calander.svg" alt="" />
                    </div>
                </div>
                <div className="flex-col">
                    <h2 className="text-secondary font-bold p-2 my-2">Some Description</h2>
                    <h2 className="text-gray-600 p-2 my-2 pl-4">Leave Description About the room</h2>
                </div>
                <div>
                    <div className="flex text-secondary font-bold p-2 my-2 justify-between">
                        <h2 className="">Room Access</h2>
                        <h2 className="">Price(ETB)</h2>
                    </div> 
                    <div className="flex justify-between p-4 gap-4">
                        <h2 className="p-2">Lorem, ipsum.</h2>
                        <h2 className="p-2">3,000,000</h2>
                    </div>
                </div>
                <div className="flex justify-between p-2 h-full">
                    <div className="flex gap-4">
                        <h2 className="flex text-secondary font-bold">Progress</h2>
                        <h2 className="text-gray-600">In Progress</h2>
                    </div>
                    <div className="flex justify-center items-center bg-primary rounded-2xl w-20 h-full text-white">
                        Save
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditDeal