import { useState } from 'react';
import { Data, } from '../Data/Data';

const Food = () => {
    const [food, setFood] = useState(Data)

    const filterType = (categories) => {
        setFood(
            Data.filter((item) => {
                return item.categories === categories;
            })
        );
    };

const filterPrice = (price) =>{
    setFood(
        Data.filter((item)=>{
            return item.price === price;
        })
    )
}

 return (
    <div className="max-w-[1640px]  mx-auto px-4 py-12">
      <h1 className="text-orange-600 text-center text-4xl font-bold">Top Rated Menu Items</h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-lg">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button   onClick={()=>{setFood(Data)  }} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">All</button>
            <button  onClick={()=>filterType('burger')  } className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">Burgers</button>
            <button  onClick={()=>filterType('pizza')  } className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">Pizza</button>
            <button  onClick={()=>filterType('salad')  }className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">Sallads</button>
            <button  onClick={()=>filterType('chicken')  } className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">Chickens</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-lg">Filter Price</p>
          <div>
          <button onClick={() => filterPrice('$')} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">$</button>
<button onClick={() => filterPrice('$$')} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">$$</button>
<button onClick={() => filterPrice('$$$')} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">$$$</button>
<button onClick={() => filterPrice('$$$$')} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">$$$$</button>
<button onClick={() => filterPrice('$$$$$')} className="border-2 mx-1 px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-2xl">$$$$$</button>

          </div>
        </div>
      </div>

      <div className=' max-w-[1640px] py-6 '>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
          {food.map((item, index) => (
            <div key={index} className="border rounded-lg border-gray-200 p-4 shadow-2xl hover:scale-105 ">
              <img src={item.image} alt="item" className="w-full h-[250px]  object-cover " />
              <div className=' flex justify-between items-center px-2 py-6'>
                <p className=' font-bold'>{item.name}</p>
                <p className=' text-orange-600'>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
