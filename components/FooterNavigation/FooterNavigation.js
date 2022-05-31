// Components
import HomeIcon from './Home/HomeIcon';
import ShortsIcon from './Shorts/ShortsIcon';
import CreateIcon from './Create/CreateIcon';
import SubscriptionsIcon from './Subscriptions/SubscriptionsIcon';
import LibraryIcon from './Library/LibraryIcon';
export default function FooterNavigation() {
  return (
    <div className="sm:hidden w-full px-3 flex justify-between text-sm items-center bg-[#202020] border-t-2 border-solid border-gray-700">
      <button className="bg-transparent py-3 flex flex-col gap-1 text-gray-300">
        <HomeIcon />
      </button>
      <button className="bg-transparent py-3 flex flex-col gap-1 text-gray-300">
        <ShortsIcon />
      </button>
      <button className="bg-transparent py-3 flex self-center text-gray-300">
        <CreateIcon />
      </button>
      <button className="bg-transparent py-3 flex flex-col gap-1 text-gray-300">
        <SubscriptionsIcon />
      </button>
      <button className="bg-transparent py-3 flex flex-col gap-1 text-gray-300">
        <LibraryIcon />
      </button>
    </div>
  )
}
