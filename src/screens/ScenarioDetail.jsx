import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function ScenarioDetail() {
  const { params, navigate } = useNav();
  const name = params?.name ?? 'Scenario';

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('scenarios')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">{name}</div>
          <div className="w-10" />
        </div>

        <div className="rounded-2xl border border-white/5 bg-card p-5">
          <div className="text-sm text-white/70">Scenario details for</div>
          <div className="mt-1 text-xl font-semibold">{name}</div>
          <div className="mt-4 text-sm text-white/60">Here you can adjust lights, temperature and other actions tied to this scenario.</div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}