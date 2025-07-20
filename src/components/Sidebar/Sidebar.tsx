// src/components/Sidebar.tsx (updated)
import React from 'react';
import { AccountToggle } from './AccountToggle';
import { Search } from './Search';
import { RouteSelect } from './RouteSelect';
import { Plan } from './Plan';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-white shadow w-64">
      <div className="overflow-y-auto flex-grow p-4">
        <AccountToggle />
        <Search />
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`block px-3 py-2 rounded text-sm font-medium ${
              location.pathname === '/dashboard' ? 'bg-violet-100 text-violet-700' : 'text-stone-700 hover:bg-stone-200'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/blogs"
            className={`block px-3 py-2 rounded text-sm font-medium ${
              location.pathname === '/blogs' ? 'bg-violet-100 text-violet-700' : 'text-stone-700 hover:bg-stone-200'
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/transactions"
            className={`block px-3 py-2 rounded text-sm font-medium ${
              location.pathname === '/transactions' ? 'bg-violet-100 text-violet-700' : 'text-stone-700 hover:bg-stone-200'
            }`}
          >
            Transactions
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>
      <Plan />
    </div>
  );
};
