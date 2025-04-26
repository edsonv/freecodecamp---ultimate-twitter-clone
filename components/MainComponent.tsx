import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';

export const MainComponent = () => {
  return (
    <main className='ml-[275px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
      <h1 className='text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>
        Home
      </h1>
      <div className='border-t-[0.5px] border-b-[0.5px] flex items-stretch p-4 space-x-2 border-gray-600 relative]'>
        <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
        <div className='flex flex-col w-full h-full'>
          <input
            type='text'
            placeholder="What's happening?"
            className='w-full h-full bg-transparent outline-0 border-0 p-4 placeholder:text-2xl placeholder:text-gray-600'
          />
          <div className='w-full flex justify-between items-center'>
            <div></div>
            <div className='w-full max-w-[100px]'>
              <button className='w-full rounded-full bg-primary px-4 py-2 text-lg text-center hover:opacity-70 transition duration-200 font-bold'>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className='border-b-[0.5px] border-gray-600 flex space-x-4 p-4'
          >
            <div>
              <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center w-full justify-between'>
                <div className='flex items-center space-x-1 w-full'>
                  <div className='font-bold'>Club Of Coders</div>
                  <div className='text-gray-500'>@clubofcoderscom</div>
                  <div className='text-gray-500'>
                    <BsDot />
                  </div>
                  <div className='text-gray-500'>1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className='text-white text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                distinctio veritatis sapiente placeat sit sed ullam tenetur
                assumenda earum odio est velit mollitia corrupti excepturi
                possimus eius, repudiandae autem ut.
              </div>
              <div className='bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2'></div>
              <div className='flex items-center w-full justify-start space-x-20 mt-2'>
                <div className='rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3'>
                  <BsChat />
                </div>
                <div className='rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3'>
                  <AiOutlineRetweet />
                </div>
                <div className='rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3'>
                  <AiOutlineHeart />
                </div>
                <div className='rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3'>
                  <IoStatsChart />
                </div>
                <div className='rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-3'>
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
