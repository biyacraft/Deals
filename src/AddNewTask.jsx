const AddNewTask = () => {
  return (
    <div className="flex-col bg-black">
    <div className="bg-black flex items-center justify-center h-max">
        <div className="flex-col w-1/2 h-4/5 p-6 bg-white rounded-2xl my-10">
            <div className="flex p-3 justify-between items-center">
                <h2 className="text-secondary font-bold">Add New Task</h2>
                <img src="close.svg" alt="" />
            </div>
            <div className="flex-col">
                <div className="flex-col">
                    <input className="text-gray-900 p-2 m-6 w-full" type="text" placeholder="Enter Task Description" />
                </div> 
                <div className="flex-col justify-between items-center">
                    <h2 className="text-secondary font-bold">Due Date</h2>
                    <input className="text-gray-900 p-2 m-6 w-full" type="text" placeholder="Due Date" />
                </div>
            </div>
            <div className="flex justify-between gap-6">
                <button className="bg-white text-secondary w-1/3 p-2 flex justify-center items-center rounded-3xl font-bold">Cancel</button>
                <button className="bg-primary text-white w-1/3 p-2 flex justify-center items-center rounded-3xl font-bold">Save</button>
            </div>
        </div>
    </div>
    <div className="bg-black h-10 w-full">

    </div>
    <div className="bg-black h-10 w-full">

    </div>
    <div className="bg-black h-10 w-full">

    </div>
    <div className="bg-black h-10 w-full">

    </div>
    <div className="bg-black h-10 w-full">

    </div>
    </div>
  )
}

export default AddNewTask