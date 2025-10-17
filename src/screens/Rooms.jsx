import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function Rooms() {
  const { navigate } = useNav();
  const rooms = [
    { name: 'Bedroom', go: () => navigate('lighting') },
    { name: 'Living room', go: () => navigate('scenarios') },
    { name: 'Kitchen', go: () => navigate('conditioning') },
    { name: 'Office', go: () => navigate('security') },
  ];

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Rooms</div>
          <div className="w-10" />
        </div>

        <div className="space-y-3">
          {rooms.map((r) => (
            <button
              key={r.name}
              className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-card px-4 py-3 text-left hover:bg-white/5"
              onClick={r.go}
            >
              <span className="text-sm font-medium">{r.name}</span>
              <span className="text-xs text-white/60">Open</span>
            </button>
          ))}
        </div>
      </div>

      <TabBar />
    </div>
  );
}