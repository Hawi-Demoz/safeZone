import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
  { to: '/', label: 'Home', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0h4m-4 0H7" /></svg>
  ) },
  { to: '/resources', label: 'Resources', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" /></svg>
  ) },
  { to: '/emergency', label: 'Emergency', icon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 015.636 18.364l1.414-1.414A7 7 0 0016.95 7.05l1.414-1.414z" /></svg>
  ) },
];

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/90 border-t border-gray-100 shadow-xl"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
      role="navigation"
      aria-label="Bottom Navigation"
    >
      <div className="max-w-xl mx-auto flex justify-around items-center">
        {navs.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-2 py-2 transition-all duration-150 ${isActive ? 'text-gray-800 font-bold scale-110' : 'text-gray-400 hover:text-gray-600'} `
            }
            style={{ minWidth: 80 }}
          >
            {icon}
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
