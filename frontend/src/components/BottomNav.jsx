import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  const base = "flex-1 text-center py-2 text-sm";
  const active = ({ isActive }) => `${base} ${isActive ? 'text-red-600 font-semibold' : 'text-gray-600'}`;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t bg-white"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
      role="navigation"
      aria-label="Bottom Navigation"
    >
      <div className="max-w-xl mx-auto flex">
        <NavLink to="/" className={active}>Home</NavLink>
        <NavLink to="/resources" className={active}>Resources</NavLink>
        <NavLink to="/emergency" className={active}>Emergency</NavLink>
      </div>
    </nav>
  );
}
