import React, { useEffect, useRef, useState } from 'react';

/**
 * Simple circular hue selector using a conic-gradient wheel.
 * Shows a white dot at the selected hue angle.
 */
export default function ColorWheel({
  size = 260,
  hue,
  onChange,
  label = 'Select color',
}) {
  const [internalHue, setInternalHue] = useState(hue ?? 210);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof hue === 'number') setInternalHue(hue);
  }, [hue]);

  const setHue = (deg) => {
    const val = (deg + 360) % 360;
    setInternalHue(val);
    onChange?.(val);
  };

  const handlePointer = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const angleRad = Math.atan2(dy, dx); // 0 rad = right
    const deg = (angleRad * 180) / Math.PI; // -180..180
    setHue(Math.round(deg));
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    const move = (ev) => {
      const { clientX, clientY } =
        ev.touches?.[0] ?? ev.changedTouches?.[0] ?? ev;
      handlePointer(clientX, clientY);
    };
    move(e);
    window.addEventListener('pointermove', move);
    window.addEventListener('touchmove', move);
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('touchend', up);
    };
    window.addEventListener('pointerup', up, { once: true });
    window.addEventListener('touchend', up, { once: true });
  };

  const r = size / 2;
  const dotR = r - 14;
  const rad = (internalHue * Math.PI) / 180;
  const dotX = r + dotR * Math.cos(rad);
  const dotY = r + dotR * Math.sin(rad);

  return (
    <div className="w-full">
      <div className="mb-3 text-center text-sm text-white/70">{label}</div>
      <div
        ref={ref}
        className="relative mx-auto rounded-full ring-1 ring-white/10"
        style={{
          width: size,
          height: size,
          background:
            'conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
        }}
        onPointerDown={onPointerDown}
        onTouchStart={onPointerDown}
      >
        {/* Middle soft overlay for depth */}
        <div
          className="absolute inset-3 rounded-full bg-black/10 backdrop-blur-[1px]"
          aria-hidden
        />
        {/* Selected dot */}
        <div
          className="absolute -ml-2.5 -mt-2.5 h-5 w-5 rounded-full border border-white/70 bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]"
          style={{ left: dotX, top: dotY }}
        />
      </div>
      <div className="mt-2 text-center text-xs text-white/50">
        Hue: {Math.round((internalHue + 360) % 360)}°
      </div>
    </div>
  );
}