'use client';

import { navData } from '@/utils';

const NavButtonsList = () => {
  return (
    <>
      {navData.map(({ name, Icon }) => (
        <li
          key={name}
          className="flex items-center pl-2 gap-4 text-gray-400 h-11 mb-2 rounded-lg bg-purple"
        >
          {<Icon className="w-6 h-6 " />}
          <span className="capitalize text-sm"> {name}</span>
        </li>
      ))}
    </>
  );
};

export default NavButtonsList;
