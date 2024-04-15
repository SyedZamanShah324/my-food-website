import { HiMenu } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between item-center p-4">
     <div className=" flex items-center">        <div>
<HiMenu size={30} onClick={ () =>{setShowNav(!showNav)}}  />
</div>
<h1 className=" text-2xl sm:text-3xl lg:text-4xl">Beast <span className=" font-bold">Eats</span></h1>
<div className=" rounded-full bg-gray-200 hidden lg:flex items-center p-1 text-[14px]">
    <p className=" rounded-full bg-black text-white p-2">Delivery</p>
    <p className=" p-2">Pickup</p>
</div>

</div>
<div className=" flex items-center px-2 rounded-full bg-gray-200 w-[200px] sm:w-[400px] lg:w-[500px]">
<IoMdSearch size={25} />
    <input type="text " placeholder="Search" className=" bg-transparent p-2 w-full focus:outline-none" />
</div>
<button className=" bg-black text-white hidden md:flex items-center py-2 px-4 rounded-3xl"><FaCartShopping size={20} className=" mr-2" /> Cart</button>
   {showNav ? 
   <div className=" w-full h-screen bg-black/80 fixed top-0 left-0 z-20 ">
   <div className=" h-screen w-[40%] bg-white fixed top-0 left-0 z-100 duration-600">
   <IoCloseSharp  size={30} onClick={()=>{setShowNav(!showNav)}} className=" absolute right-4 top-4 cursor-pointer"/>
<h2 className=" p-4 text-2xl">Best <span className=" font-bold">Eats</span></h2>

    <ul className=" flex flex-col p-4 text-gray-700">
        <li className=" py-3 text-xl "> <FaTruckFast size={25} className=" inline " />  Order</li>
        <li className=" py-3 text-xl"> <MdFavorite  size={25} className=" inline " /> Favourite</li>
        <li className=" py-3 text-xl"> <FaWallet  size={25}className=" inline " /> Wallent</li>
        <li className=" py-3 text-xl"> <MdHelp size={25}className=" inline " /> Help</li>
        <li className=" py-3 text-xl"> <FaTag  size={25}className=" inline " />Promotions</li>
        <li className=" py-3 text-xl"> <RiInboxUnarchiveFill size={25} className=" inline " />Best One</li>
        <li className=" py-3 text-xl"> <FaUserFriends size={25} className=" inline " /> Invite Friends</li>
    </ul>
    </div>
   </div> :null}
   
    </div>
  )
}

export default Navbar