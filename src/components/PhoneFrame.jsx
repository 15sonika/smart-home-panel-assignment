import React, { useEffect, useRef, useState } from 'react';

/**
 * Responsive iPhone 14/15 Pro frame with automatic scale.
 * Base content size: 390 x 844 (points). The whole phone scales to fit width.
 */
const BASE_W = 390;
const BASE_H = 844;

export default function PhoneFrame({ children, maxWidth = 430 }) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(w / BASE_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const height = BASE_H * scale;

  return (
    <div
      ref={wrapRef}
      className="relative w-full"
      style={{ maxWidth, height }}
    >
      {/* Scaled phone container */}
      <div
        className="relative mx-auto h-[844px] w-[390px] overflow-hidden rounded-[48px] border border-zinc-800/60 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* Dynamic island / notch (scales with content) */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-8 w-40 -translate-x-1/2 rounded-b-3xl bg-black"></div>

        {/* Bezel inset */}
        <div className="absolute inset-[10px] rounded-[36px] bg-bg ring-1 ring-white/5">
          {/* Safe-area content wrapper */}
          <div className="relative h-full w-full overflow-hidden rounded-[36px]">
            {/* Provide safe-area padding so headers/bottom bar avoid notches */}
            <div className="safe-top safe-bottom h-full w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}