
const Hero = () => {
  return (
    <div className=" max-w-[1640] mx-auto p-4 ">
        <div className=" max-h-[500px] relative ">
            <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/35  lg:pl-10 flex flex-col justify-center">
                <h1 className=" font-bold px-4 text-4xl sm:5xl md:text-5xl lg:6xl">The <span className=" text-orange-600">Best</span></h1>
                <h1 className=" font-bold px-4 text-4xl sm:5xl md:text-5xl lg:6xl"><span className=" text-orange-600">Foods</span> Delivery</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
    </div>

  )
}

export default Hero