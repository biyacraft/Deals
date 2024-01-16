
const Profile = () => {
  return (
    <div className="flex-col px-4">
        <nav className="flex bg-white justify-between items-center p-3">
            <div className="flex w-full h-full p-5">
                <h1 className="text-secondary text-3xl font-bold"><strong>Profile</strong></h1>
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
        <div className="w-full justify-around p-10">
            <div className="">
                <img className="bg-cover w-full" src="cover.svg" alt="" />
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
        <div className="flex-col px-10">
            <h1 className="text-secondary font-bold my-3 py-3">Change Password</h1>
            <div className="my-3 p-3 w-1/2"><input className="w-full" type="password" placeholder="Current Password"/></div>
            <div className="my-3 p-3 w-1/2"><input className="w-full" type="text" placeholder="New Password" /></div>
            <div className="my-3 p-3 w-1/2"><input className="w-full" type="text" placeholder="Re-type Password" /></div>
        </div>
        <div className="flex items-center justify-center p-5 my-6">
            <button className="bg-primary text-white w-1/6 p-2 flex justify-center items-center rounded-3xl font-bold">Update Profile</button>
        </div>
    </div>
  )
}

export default Profile