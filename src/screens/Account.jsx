import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import TabBar from '../components/TabBar.jsx';
import { useNav } from '../lib/nav.jsx';

export default function Account() {
  const { navigate } = useNav();

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-auto p-5 pt-8">
        <div className="mb-4 flex items-center justify-between">
          <button className="rounded-xl p-2 text-white/80 hover:bg-white/5" onClick={() => navigate('dashboard')}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-base font-semibold">Account</div>
          <div className="w-10" />
        </div>

        <div className="rounded-2xl border border-white/5 bg-card p-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full ring-1 ring-white/10"
              alt="Profile"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop"
            />
            <div>
              <div className="font-medium">Martha Doe</div>
              <div className="text-xs text-white/60">martha@example.com</div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-black ring-1 ring-accent/30 hover:bg-accent-400" onClick={() => navigate('options')}>
              Edit profile
            </button>
            <button className="flex-1 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15" onClick={() => navigate('notifications')}>
              Notifications
            </button>
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}