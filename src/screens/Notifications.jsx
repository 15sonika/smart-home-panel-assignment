import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function Notifications() {
  const { navigate } = useNav();
  const items = [
    { t: '9:41 AM', msg: 'Front door detected motion.' },
    { t: '8:10 AM', msg: 'Bedroom light turned on by schedule.' },
  ];

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Notifications</div>
          <div className="w-10" />
        </div>

        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-card p-4">
              <div className="text-sm">{it.msg}</div>
              <div className="mt-1 text-xs text-white/60">{it.t}</div>
            </div>
          ))}
        </div>
      </div>

      <TabBar />
    </div>
  );
}