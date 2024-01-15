import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

const DealDetails = () => {
  return (
    <div className='flex-col'>
        <NavBar />
        <div className='flex'>
            <div className='w-30'>
            <SideBar />
            </div>
            <div className='flex w-11/12'>
                <div className='w-2/3 flex-col'>
                    <div className='flex justify-between p-5'>
                    <div className='flex gap-4'>
                    <img src="user.png" className='rounded-full w-11 h-11' alt="" />
                    <div className='flex-col'>
                    <h2 className='text-gray-600'>Customer</h2>
                    <h2 className='text-secondary font-semibold'>Eyob Abata</h2>
                    </div>
                    </div>
                    <div className='flex-col'>
                        <h2 className='text-gray-600'>Email</h2>
                        <h2 className='text-secondary font-semibold'>eyobabata@gmail.com</h2>
                        </div>
                    <div>
                        <h2 className='text-gray-600'>Phone</h2>
                        <h2 className='text-secondary font-semibold'>0912131415</h2>
                    </div>
                    </div>
                    <div className='flex justify-between p-5'>
                        <div className='text-secondary font-bold text-3xl'>Lorem ipsum dolor sit.
                            <h2>Location City</h2>
                        </div>
                        <div className='flex gap-6'>
                            <button><img src="delete.svg" alt="" /></button>
                            <button><img src="edit-button.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className='flex-col p-5 w-2/3'>
                        <div className='flex justify-between my-6 py-2'>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Progress</h2>
                        <h2 className='text-secondary font-semibold'>In Progress</h2>
                        </div>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Appointment Date</h2>
                        <h2 className='text-secondary font-semibold'>Nov 17, 2021 08:00</h2>
                        </div>
                        </div>
                        <div className='flex justify-between my-6 py-2'>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Room Area</h2>
                        <h2 className='text-secondary font-semibold'>250M&sup2;</h2>
                        </div>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Number of Rooms</h2>
                        <h2 className='text-secondary font-semibold'>3</h2>
                        </div>
                        </div>
                        <div className='flex justify-between my-6 py-2'>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Price</h2>
                        <h2 className='text-secondary font-semibold'>3,000,000ETB</h2>
                        </div>
                        <div className='flex-col'>
                        <h2 className='text-gray-600'>Room Access</h2>
                        <h2 className='text-secondary font-semibold'>Lorem, ipsum.</h2>
                        </div>
                        </div>
                        <div className='flex-col my-6 py-1'>
                        <h2 className='text-gray-600'>Special Instruction</h2>
                        <p className='text-gray-800'>At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/3 flex-col'>
                    <div className='flex-col'>
                        <div className='p-6 text-secondary font-bold py-2'>
                        <h1>Record Activity</h1>
                        </div>
                        <div>
                            <div className='flex-col '>
                                <div className='text-secondary font-bold py-3 px-6'>
                                    <h1 className='t'>Description</h1>
                                    <input className='m-4' type="text" placeholder='Write Your Notes' />
                                </div>
                            </div>
                            <div className='flex justify-between px-6 text-gray-600'>
                                <h2>Nov 14 2021, 10:00</h2>
                                <button>
                                <img src="calander.svg" alt="" />
                                </button>
                            </div>
                            <div className='px-6 flex-col'>
                                <h1 className='text-secondary font-bold py-3'>Images</h1>
                                <div className='flex justify-center text-gray-600'>
                                <button>ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end px-6'>
                            <button className='bg-primary rounded-3xl w-20 h-10 text-white flex justify-center items-center'>Save</button>
                        </div>
                    </div>
                    <div className='flex-col'>
                        <div className='text-secondary font-bold py-4'>
                            Activity Log
                            </div>
                        
                        <div className='flex justify-start  gap-4'>
                            <div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                            </div>
                            <div className='flex-col'>
                                <div className='flex-col'>
                                <h2 className='text-gray-600'>17 Nov 2021</h2>
                                <p className='text-secondary font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className='bg-gray-300 w-full h-40 p-5 my-1'></div>
                            </div>
                            </div>
                            <div className='flex justify-start  py-3'>
                            <div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                            </div>
                            <div className='flex-col'>
                                <div className='flex-col'>
                                <h2 className='text-gray-600'>17 Nov 2021</h2>
                                <p className='text-secondary font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                               
                            </div>
                            </div>
                            <div className='flex justify-start py-4'>
                            <div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                            </div>
                            <div className='flex-col'>
                                <div className='flex-col'>
                                <h2 className='text-gray-600'>17 Nov 2021</h2>
                                <p className='text-secondary font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                               
                            </div>
                            </div>
                            <div className='flex items-center justify-center'>
                            <button >Load More</button>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealDetails