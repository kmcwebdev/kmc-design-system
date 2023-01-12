import React, { useState } from 'react';
import { Sidebar } from './component';
import RectangleGroupIcon from '@heroicons/react/24/solid/RectangleGroupIcon';
import ArrowLongUpIcon from '@heroicons/react/24/solid/ArrowLongUpIcon';

function App() {
  const [activeNav, setActiveNav] = useState('');

  return (
    <div className="h-screen w-screen text-center bg-gray-50">
      <Sidebar className="w-[88px]" theme="dark" onChange={(e) => setActiveNav(e)} activeNav={activeNav}>
        <Sidebar.Item icon={<RectangleGroupIcon className="h-6 w-6" />} id="/dashboard">
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item icon={<ArrowLongUpIcon className="h-6 w-6" />} id="/profile">
          Profile
        </Sidebar.Item>
      </Sidebar>
    </div>
  );
}

export default App;
