
const NextAppointment = () => {
  return (
    <div className="flex-col w-1/3 p-5 m-1 bg-primary rounded-xl">
    <div className="flex items-center justify-between gap-3">
      <div>
        <h1 className="text-white font-semibold">Next Appointment</h1>
      </div>
      <div className="bg-white rounded-full w-3 h-3"></div>
    </div>
    <div>
      <div className="flex items-center">
        <div className="bg-white rounded-full w-12 h-12"></div>
        <div className="text-white p-3">
          <h2 className="font-semibold">CMC Michael Road</h2>
          <p className="text-gray-300">Lorem ipsum</p>
          </div>
      </div>
      <div className="">
      <div className="text-white p-2 mb-20">
        <p className="text-gray-300">Appointment Date</p>
        <h2 className="text-semibold">Nov 18 2022, 07:00</h2>
      </div>



      <div className="bg-white rounded-full absolute">

      
      

      </div>
      <div className="flex justify-end">
      <div className="flex bg-white rounded-3xl w-28 h-10 justify-center ">
        <button className="text-primary p-2 font-semibold">See Detail</button>
      </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default NextAppointment