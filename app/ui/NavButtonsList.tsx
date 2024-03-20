'use client';

import { useChangePathName } from '@/hooks';
import { navData } from '@/utils';
import { useRouter } from 'next/navigation';

const NavButtonsList = () => {
  const { setSectionPath } = useChangePathName();

  return (
    <>
      {navData.map(({ name, Icon }) => (
        <li
          data-testid={`nav-link-${name}`}
          key={name}
          onClick={() => setSectionPath(name)}
          className="flex items-center pl-2 gap-4 text-gray-400 h-11 mb-2 rounded-lg bg-purple cursor-pointer"
        >
          {<Icon className="w-6 h-6 " />}
          <span className="capitalize text-sm">{name}</span>
        </li>
      ))}
    </>
  );
};

export default NavButtonsList;
