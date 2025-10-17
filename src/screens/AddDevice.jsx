import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function AddDevice() {
  const { navigate } = useNav();

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Add Device</div>
          <div className="w-10" />
        </div>

        <div className="space-y-3">
          {['Light', 'Camera', 'Thermostat', 'Outlet'].map((t) => (
            <button
              key={t}
              onClick={() => navigate('options')}
              className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-card px-4 py-3 text-left hover:bg-white/5"
            >
              <span className="text-sm">{t}</span>
              <span className="text-xs text-white/60">Setup</span>
            </button>
          ))}
        </div>
      </div>

      <TabBar />
    </div>
  );
}