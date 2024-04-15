
const Footer = () => {
  return (
    <div className=' max-w-[1640px] px-6 lg:px-24 py-16 mx-auto bg-neutral-400/20 gap-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <div>
        <ul>
            <li className=" text-lg font-bold">About us</li>
            <li className=" pt-4">Privacy Policy</li>
            <li className=" pt-4">Terms & Conditions</li>
            <li className=" pt-4">Nutritional Info</li>
            <li className=" pt-4">Download Menu</li>
            </ul>
        </div>
    
    
    <div>
        <ul>
            <li className=" text-lg font-bold">Contact</li>
            <li className=" pt-4">Call 111 366 466</li>
            <li className=" pt-4">Feedback</li>
        </ul>
    </div>
    <div>
        <ul>
            <li className=" font-bold text-lg">Help</li>
            <li className=" pt-4">Track Order</li>
            <li className=" pt-4">Store Finder</li>
        </ul>
    </div>
    
    
    </div>
  )
}

export default Footer