import React from 'react';
import { ChevronLeftIcon, EllipsisVerticalIcon, CameraIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function Security() {
  const { navigate } = useNav();
  const cams = ['Front door', 'Living room', 'Garage', 'Backyard'];

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-2 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="text-base font-semibold">Security</div>
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('options')}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-3">
          {cams.map((c) => (
            <button
              key={c}
              onClick={() => navigate('options')}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-card p-4 text-left hover:bg-white/5"
            >
              <CameraIcon className="h-6 w-6 text-white/70" />
              <div className="flex-1">
                <div className="font-medium">{c}</div>
                <div className="text-xs text-white/60">Tap to view settings</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5">
          <button
            className="w-full rounded-2xl bg-accent px-5 py-3 text-base font-semibold text-black shadow-glow ring-1 ring-accent/30 hover:bg-accent-400"
            onClick={() => navigate('addDevice')}
          >
            Add camera
          </button>
        </div>
      </div>

      <TabBar />
    </div>
  );
}