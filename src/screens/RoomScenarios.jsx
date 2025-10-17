import React, { useState } from 'react';
import { ChevronLeftIcon, EllipsisVerticalIcon, FilmIcon, SunIcon, BookOpenIcon, MoonIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import clsx from 'classnames';
import { useNav } from '../lib/nav.jsx';

export default function RoomScenarios() {
  const { navigate } = useNav();
  const [active, setActive] = useState('Movie night');

  const scenarios = [
    { key: 'Movie night', Icon: FilmIcon },
    { key: 'Morning', Icon: SunIcon },
    { key: 'Reading', Icon: BookOpenIcon },
    { key: 'Lights Off', Icon: MoonIcon },
  ];

  const openScenario = (name) => {
    setActive(name);
    navigate('scenarioDetail', { name });
  };

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-2 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Bedroom</div>
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('options')}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/5">
          <div
            className="relative h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1578898887932-1be393b6c3f5?q=80&w=1400&auto=format&fit=crop')",
              filter: 'brightness(0.65) contrast(1.05)',
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {scenarios.map(({ key, Icon }) => (
            <ScenarioCard key={key} label={key} Icon={Icon} active={key === active} onClick={() => openScenario(key)} />
          ))}
        </div>

        <div className="mt-5">
          <button
            className="w-full rounded-2xl bg-accent px-5 py-3 text-base font-semibold text-black shadow-glow ring-1 ring-accent/30 hover:bg-accent-400"
            onClick={() => navigate('conditioning')}
          >
            Turn on air conditioning
          </button>
        </div>
      </div>

      <TabBar />
    </div>
  );
}

function ScenarioCard({ label, Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex h-28 w-full flex-col items-start justify-between rounded-2xl border p-4 text-left transition',
        active ? 'border-accent/40 bg-accent/10 shadow-glow' : 'border-white/5 bg-black/30 hover:bg-white/5'
      )}
    >
      <Icon className={clsx('h-7 w-7', active ? 'text-accent-400' : 'text-white/80')} />
      <div className="text-sm font-medium">{label}</div>
    </button>
  );
}