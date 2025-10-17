import React, { useMemo, useState } from 'react';
import { ChevronLeftIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import ColorWheel from '../components/ColorWheel.jsx';
import CircularToggle from '../components/CircularToggle.jsx';
import TabBar from '../components/TabBar.jsx';
import clsx from 'classnames';
import { useNav } from '../lib/nav.jsx';

export default function LightingControl() {
  const { navigate } = useNav();
  const [hue, setHue] = useState(210);
  const [brightness, setBrightness] = useState(70);
  const [lightOn, setLightOn] = useState(true);

  const gradient = useMemo(() => {
    const c = `hsl(${hue}, 100%, 50%)`;
    return { background: `linear-gradient(90deg, #000 0%, ${c} 100%)` };
  }, [hue]);

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

        <div className="mt-4 flex items-center justify-center">
          <CircularToggle value={lightOn} onChange={setLightOn} size={64} />
        </div>

        <div className="mt-6">
          <ColorWheel hue={hue} onChange={setHue} label="Select color" />
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm text-white/80">Brightness</div>
            <div className="text-sm text-white/60">{brightness}%</div>
          </div>
          <div className="h-3 w-full rounded-full ring-1 ring-white/10" style={gradient}>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
              className="h-3 w-full"
              aria-label="Brightness"
            />
          </div>
        </div>

        <ScheduleRow />
      </div>

      <TabBar />
    </div>
  );
}

function ScheduleRow() {
  const [enabled, setEnabled] = useState(true);
  const [onTime, setOnTime] = useState('20:00');
  const [offTime, setOffTime] = useState('23:00');

  return (
    <div className="mt-6 rounded-2xl border border-white/5 bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium">Schedule</div>
        <div
          role="switch"
          aria-checked={enabled}
          onClick={() => setEnabled(!enabled)}
          className={clsx('flex h-7 w-12 cursor-pointer items-center rounded-full p-1 transition', enabled ? 'bg-accent' : 'bg-zinc-700')}
        >
          <div className={clsx('h-5 w-5 rounded-full bg-white transition', enabled ? 'translate-x-5' : 'translate-x-0')} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        {timeBtn('ON', onTime, setOnTime)}
        {timeBtn('OFF', offTime, setOffTime)}
      </div>
    </div>
  );
}
function timeBtn(label, value, setValue) {
  return (
    <label className="relative">
      <span className="inline-block rounded-xl border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm text-white/80 hover:bg-zinc-700/60">
        {label}: {value}
      </span>
      <input type="time" value={value} onChange={(e) => setValue(e.target.value)} className="absolute inset-0 cursor-pointer opacity-0" />
    </label>
  );
}