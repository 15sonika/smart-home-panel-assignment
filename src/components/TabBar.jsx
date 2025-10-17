import React from 'react';
import {
  HomeIcon,
  Squares2X2Icon,
  BoltIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'classnames';
import { useNav } from '../lib/nav.jsx';

const items = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'rooms', label: 'Rooms', icon: Squares2X2Icon },
  { key: 'scenes', label: 'Scenarios', icon: BoltIcon },
  { key: 'security', label: 'Security', icon: ShieldCheckIcon },
  { key: 'account', label: 'Account', icon: UserCircleIcon },
];

export default function TabBar({ active }) {
  const { screen, navigate } = useNav();

  const current =
    active ??
    (screen === 'dashboard' ? 'home'
      : screen === 'lighting' || screen === 'rooms' || screen === 'conditioning' ? 'rooms'
      : screen === 'scenarios' || screen === 'scenarioDetail' ? 'scenes'
      : screen === 'security' ? 'security'
      : screen === 'account' ? 'account'
      : 'home');

  const handle = (key) => {
    switch (key) {
      case 'home': navigate('dashboard'); break;
      case 'rooms': navigate('rooms'); break;
      case 'scenes': navigate('scenarios'); break;
      case 'security': navigate('security'); break;
      case 'account': navigate('account'); break;
      default: navigate('dashboard'); break;
    }
  };

  return (
    <div className="absolute inset-x-0 bottom-0 z-20">
      <div className="mx-4 mb-4 safe-bottom rounded-2xl bg-black/40 p-2 backdrop-blur-md ring-1 ring-white/10">
        <nav className="grid grid-cols-5 gap-1">
          {items.map(({ key, label, icon: Icon }) => {
            const isActive = current === key;
            return (
              <button
                key={key}
                onClick={() => handle(key)}
                className={clsx(
                  'flex flex-col items-center gap-1 rounded-xl py-2 text-xs',
                  isActive ? 'text-white' : 'text-white/60 hover:text-white/80'
                )}
              >
                <Icon className={clsx('h-6 w-6', isActive ? 'text-accent-400 drop-shadow' : 'text-white/70')} />
                <span className="leading-none">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}