import React from 'react'
import useDua from '../Hooks/useDua'


const TodaysDua = () => {
const {
    handleClick
} = useDua();

  return (
    <div>
        
      <div className='flex justify-center h-full bg-cover bg-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/prayer.jpg')`}}>
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-4">Today's Dua</h2>

          <h3 className='text-white text-3xl p-10'>
          بسمِ اللهِ الذي لا يَضرُ مع اسمِه شيءٌ في الأرضِ  <br />ولا في السماءِ  
          وهو السميعُ العليمِ  يا حيُّ يا قيُّومُ<br /> برَحمتِكَ أستَغيثُ
           أصلِح لي شأني كُلَّهُ<br /> ولا تَكِلني إلى نَفسي طرفةَ عينٍ

          </h3>
        </div>
       
        <div className="absolute bottom-0 w-full flex justify-center mb-10">
        <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out" onClick={handleClick}>
          Get Started
          </button>
      </div>
    </div>
    </div>
  )
}

export default TodaysDua