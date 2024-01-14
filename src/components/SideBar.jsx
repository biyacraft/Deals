import { Link } from 'react-router-dom';

const SideBar = () => {
    
    return (
        
      <div className="flex flex-col h-full p-2 gap-5 m-2">
              <div className="hover:bg-primary bg-primary rounded-full items-center justify-center">
                  <button className="p-2" >
                      <img src="menu-home.svg" alt="" />
                  </button>
              </div>
              <div className=" hover:bg-primary rounded-full items-center justify-center">
                  <button className="p-2">
                    <Link to="../Deals">
                      <img src="menu-shop.svg" alt="" />
                      </Link>
                  </button>
              </div><div className=" hover:bg-primary rounded-full items-center justify-center">
                  <Link to="../Customer">
                  <button className="p-2">
                      <img src="menu-contacts.svg" alt="" />
                  </button>
                  </Link>
              </div><div className=" hover:bg-primary rounded-full items-center justify-center">
                  <button className="p-2">
                      <img src="menu-list.svg" alt="" />
                  </button>
              </div><div className=" hover:bg-primary rounded-full items-center justify-center">
                  <button className="p-2">
                      <img src="menu-calander.svg" alt="" />
                  </button>
              </div>
              <div className=" hover:bg-primary rounded-full items-center justify-center">
                  <button className="p-2">
                      <img src="menu-notification.svg" alt="" />
                  </button>
              </div>
              <div className=" hover:bg-primary rounded-full items-center justify-center">
                  <button className="p-2">
                      <img src="menu-setting.svg" alt="" />
                  </button>
              </div>
          </div>
    )
  }
  
  export default SideBar