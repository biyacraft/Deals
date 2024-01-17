import { Link } from "react-router-dom"
import SideBar from "./components/SideBar"

const EmployeeDetail = () => {
  return (
    <div>
        <nav className="flex bg-white justify-between items-center p-3">
            <div className="flex w-full h-full p-5">
                <h1 className="text-secondary text-2xl font-semibold"><strong>Employee Detail</strong></h1>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex w-6 h-6">
                    <button>
                    <img src="search.svg" alt="" />
                    </button>
                </div>
                <div className="w-10 h-10">
                    
                    <Link to="/Profile">
                        <button>
                            <img src="user.png" className="rounded-full"  alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
        <div className="flex">
            <SideBar />
            <div>
                <h1 className=""><strong className="text-secondary">Hey Eyob</strong> Lorem ipsum</h1>
                <div className="flex bg-gray-300 mr-10 rounded-2xl">
                <div className="flex gap-4 p-4">
                    <img className=" w-30 h-30" src="customer2.svg" alt="" />
                    <div className=" text-gray-800 py-2">
                        <h1 className="text-2xl font-semibold py-2">Eyob Abate</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <h1 className="text-xl font-semibold py-2">Contact</h1>
                        <h1 className="py-2"><p className="font-semibold">Email: </p>eyobabate@gmail.com</h1>
                        <h1 className="py-2"><p className="font-semibold">Phone: </p>0911121314</h1>
                        <h1 className="py-2 font-semibold">Facebook</h1>
                        <a href="#">facebook.com/eyob</a>
                    </div>
                    
                </div>
                <div className="p-4 w-1/2">
                <p className="font-semibold text-xl">Employee info</p>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente maxime nemo omnis, consectetur ullam minus tempore 
                    alias eveniet, assumenda earum delectus iure quo dolore. Voluptatibus 
                    qui eos, soluta blanditiis placeat ad cum ducimus enim architecto quam 
                    voluptatum ipsa, magni saepe veniam harum, consequatur dolore! Iste cumque 
                    animi molestiae velit sunt.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis similique animi repellendus officiis beatae odit, minus facilis ducimus, quaerat laborum in odio incidunt atque distinctio. Veritatis minima sunt deleniti dolor! Consequuntur vero nam facilis perferendis cupiditate sed alias earum blanditiis, dicta labore, 
                    temporibus voluptatibus tempora excepturi! Incidunt, exercitationem ipsam.
                </p>
                </div>
                </div>
                </div>
            </div>
        </div>
        <div className="w-1/2 p-11 m-10 rounded-xl">
            <h1 className="text-2xl font-bold text-gray-700">Deals Made by Eyob</h1>
            <div>
            <div className="flex py-6 gap-8 items-center">
                <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                <h1 className="text-gray-600 text-xl font-bold">Deal 1</h1>
            </div>
            <div className="flex pb-10 justify-between">
            <h1>Address</h1>
            <h1>City</h1>
            </div>
            <div className="flex pb-10 justify-between items-center">
            <h1>Date</h1>
            <h1>Time</h1>
            <div className="flex gap-4">
                <img src="customer.svg" alt="" />
                <div>
                    <h2 className="text-gray-600 font-semibold text-xl">Eyob Mesfin</h2>
                    <h2>Manager</h2>
                </div>
            </div>
            </div>
            </div>
            <div>
            <div className="flex py-6 gap-8 items-center">
                <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                <h1 className="text-gray-600 text-xl font-bold">Deal 2</h1>
            </div>
            <div className="flex pb-10 justify-between">
            <h1>Address</h1>
            <h1>City</h1>
            </div>
            <div className="flex pb-10 justify-between items-center">
            <h1>Date</h1>
            <h1>Time</h1>
            <div className="flex gap-4 border-black border-dashed">
                <img className="w-10 h-10" src="customer2.svg" alt="" />
                <div>
                    <h2 className="text-gray-600 font-semibold text-xl">Eyob Mesfin</h2>
                    <h2>Manager</h2>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail