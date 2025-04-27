import { LeftSidebar } from '@/components/LeftSidebar';
import { MainComponent } from '@/components/MainComponent';
import { BsSearch } from 'react-icons/bs';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        <LeftSidebar />
        <MainComponent />
        <section className='w-[23%] sticky overflow-scroll top-2 mt-2 flex flex-col items-stretch h-screen px-6'>
          <div>
            <div className='relative w-full h-full group:'>
              <input
                id='searchBox'
                type='text'
                placeholder='Search Twitter'
                className='outline-none focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-full py-4 pl-14 pr-4 peer'
              />
              <label
                htmlFor='searchBox'
                className='absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary text-gray-500'
              >
                <BsSearch className='w-5 h-5' />
              </label>
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-2xl my-4 px-4'>
              What&apos;s happening
            </h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className='hover:bg-white/10 p-4 last:rounded-b-xl transition duratin-200'
                >
                  <div className='font-bold text-lg'>#trending {i + 1}</div>
                  <div className='text-xs text-neutral-400'>35.5k</div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-2xl my-4 px-4'>Who to follow</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className='hover:bg-white/10 p-4 flex justify-between space-x-3 items-center last:rounded-b-xl transition durati0n-200'
                >
                  <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-neutral-600 rounded-full flex-none'></div>
                    <div className='flex flex-col'>
                      <div className='font-bold text-white'>Other user</div>
                      <div className='text-gray-500 text-xs'>@otheruser123</div>
                    </div>
                  </div>
                  <button className='rounded-full px-6 py-2 bg-white text-neutral-950'>
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
