import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notification',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'User',
    icon: BiUser,
  },
];

export const LeftSidebar = () => {
  return (
    <section className='sticky top-0 w-[23%] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`/${item.title.toLowerCase()}`}
            className='text-white hover:bg-white/30 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6'
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== 'Twitter' && <div>{item.title}</div>}
          </Link>
        ))}
        <button className='rounded-full m-4 bg-primary px-6 py-4 text-2xl text-center hover:opacity-70 transition duration-200'>
          Tweet
        </button>
      </div>
      <button className='rounded-full flex items-center justify-between space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full'>
        <div className='flex items-center space-x-2'>
          <div className='rounded-full bg-slate-400 w-12 h-12'></div>
          <div className='text-left text-sm'>
            <div className='font-semibold'>Club Of Coders</div>
            <div className='text-xs'>@clubofcoders</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};
