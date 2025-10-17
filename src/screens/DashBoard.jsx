import React, { useMemo, useState } from 'react';
import { BellIcon, EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import CircularToggle from '../components/CircularToggle.jsx';
import clsx from 'classnames';
import { useNav } from '../lib/nav.jsx';

// import conditioningImg from '../assets/conditioning.jpg';
// import securityImg from '../assets/security.jpg';
// import lightingImg from '../assets/lighting.jpg';

function Header() {
  const { navigate } = useNav();
  const dateStr = useMemo(() => {
    const d = new Date();
    return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
  }, []);

  return (
    <div className="flex items-center justify-between">
      <button
        className="flex items-center gap-3 rounded-xl p-1 pr-2 hover:bg-white/5"
        onClick={() => navigate('account')}
        aria-label="Open Account"
      >
        <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
          <img
            alt="sonika profile"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold">Hello, sonika</div>
          <div className="text-sm text-white/60">{dateStr}</div>
        </div>
      </button>

      <div className="flex items-center gap-3">
        <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('notifications')}>
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('options')}>
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

function RoomTabs() {
  const { navigate } = useNav();
  const [active, setActive] = useState('Home');
  const rooms = ['Home', 'Bedroom', 'Living room', 'Kitchen', 'Office'];

  const handle = (r) => {
    setActive(r);
    if (r === 'Home') navigate('dashboard');
    else navigate('rooms');
  };

  return (
    <div className="mt-5 overflow-x-auto">
      <div className="flex w-max gap-2">
        {rooms.map((r) => {
          const isActive = r === active;
          return (
            <button
              key={r}
              onClick={() => handle(r)}
              className={clsx(
                'whitespace-nowrap rounded-full px-4 py-2 text-sm transition',
                isActive ? 'bg-white text-black' : 'bg-zinc-800/80 text-white/80 hover:bg-zinc-700'
              )}
            >
              {r}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DeviceCardImage({ title, status, image, initialOn = false, onOpen }) {
  const [isOn, setIsOn] = useState(initialOn);

  const handleKey = (e) => {
    if (!onOpen) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div className={clsx('overflow-hidden rounded-2xl border bg-card transition', isOn ? 'border-accent/40 shadow-glow' : 'border-white/5')}>
      <div
        className={clsx('relative', onOpen && 'cursor-pointer')}
        onClick={onOpen}
        role={onOpen ? 'button' : undefined}
        tabIndex={onOpen ? 0 : undefined}
        onKeyDown={handleKey}
        aria-label={onOpen ? `Open ${title}` : undefined}
      >
        <img
          src={image}
          alt={title}
          className={clsx('h-40 w-full object-cover transition', isOn ? 'opacity-100' : 'opacity-85 grayscale-[30%] brightness-90')}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
        <div className="absolute left-3 top-3">
          <span className={clsx('rounded-full px-3 py-1 text-xs ring-1', isOn ? 'bg-accent/20 text-accent-400 ring-accent/30' : 'bg-white/10 text-white/70 ring-white/10')}>
            {isOn ? 'ON' : 'OFF'}
          </span>
        </div>
        <div className="absolute right-3 top-3" onClick={(e) => e.stopPropagation()}>
          <CircularToggle value={isOn} onChange={setIsOn} size={48} ariaLabel={`${title} power`} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-white/60">{status}</div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOn((v) => !v);
          }}
          className={clsx(
            'rounded-full px-3 py-1 text-xs font-semibold ring-1 transition',
            isOn ? 'bg-zinc-800 text-white/80 ring-white/10 hover:bg-zinc-700' : 'bg-accent text-black ring-accent/30 hover:bg-accent-400 shadow-glow'
          )}
        >
          {isOn ? 'Turn off' : 'Turn on'}
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { navigate } = useNav();

  const cards = [
    {
      title: 'Conditioning',
      status: '2 devices',
      image:
        // conditioningImg ||
        'https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2010',
      on: false,
      onOpen: () => navigate('conditioning'),
    },
    {
      title: 'Security',
      status: '3 rooms',
      image:
        // securityImg ||
        'https://plus.unsplash.com/premium_photo-1729210234080-dba7771d2389?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332',
      on: true,
      onOpen: () => navigate('security'),
    },
    {
      title: 'Lighting',
      status: '4 rooms',
      image:
        // lightingImg ||
        'https://plus.unsplash.com/premium_photo-1661925462226-ea5d18c5ba1e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600',
      on: true,
      onOpen: () => navigate('lighting'),
    },
  ];

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <Header />
        <RoomTabs />

        <div className="mt-6 space-y-4">
          {cards.map((c) => (
            <DeviceCardImage key={c.title} {...c} initialOn={c.on} />
          ))}
        </div>

        <div className="mt-6 grid place-items-center">
          <button
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-black shadow-glow ring-1 ring-accent/30 hover:bg-accent-400"
            onClick={() => navigate('addDevice')}
          >
            <PlusIcon className="h-5 w-5" />
            Add device
          </button>
        </div>
      </div>

      <TabBar />
    </div>
  );
}