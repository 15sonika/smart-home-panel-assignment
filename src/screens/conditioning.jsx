import React, { useState } from 'react';
import { ChevronLeftIcon, EllipsisVerticalIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import CircularToggle from '../components/CircularToggle.jsx';
import clsx from 'classnames';
import { useNav } from '../lib/nav.jsx';

export default function Conditioning() {
  const { navigate } = useNav();
  const [on, setOn] = useState(true);
  const [temp, setTemp] = useState(22);

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-2 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Conditioning</div>
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('options')}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 grid place-items-center">
          <CircularToggle value={on} onChange={setOn} size={64} />
          <div className="mt-3 text-sm text-white/70">{on ? 'ON' : 'OFF'}</div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/5 bg-card p-5 text-center">
          <div className="text-sm text-white/70">Target temperature</div>
          <div className="mt-2 text-5xl font-semibold">{temp}°C</div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button className="rounded-xl bg-white/10 p-3 hover:bg-white/15" onClick={() => setTemp((t) => Math.max(16, t - 1))}>
              <MinusIcon className="h-6 w-6" />
            </button>
            <button className="rounded-xl bg-accent p-3 text-black shadow-glow ring-1 ring-accent/30 hover:bg-accent-400" onClick={() => setTemp((t) => Math.min(30, t + 1))}>
              <PlusIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}