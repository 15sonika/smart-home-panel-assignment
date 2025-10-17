import React from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import clsx from 'classnames';

export default function CircularToggle({ value, onChange, size = 56, ariaLabel }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel || (value ? 'Turn off device' : 'Turn on device')}
      aria-pressed={value}
      onClick={() => onChange?.(!value)}
      className={clsx(
        'grid place-content-center rounded-full ring-1 transition-all',
        value
          ? 'bg-accent text-black ring-accent/30 shadow-glow'
          : 'bg-zinc-800 text-white/70 ring-white/10 hover:ring-white/20'
      )}
      style={{ width: size, height: size }}
    >
      <PowerIcon className="h-6 w-6" />
    </button>
  );
}