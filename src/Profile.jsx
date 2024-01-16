
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
        <div></div>
    </div>
  )
}

export default Profile