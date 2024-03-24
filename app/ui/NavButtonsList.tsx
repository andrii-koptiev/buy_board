'use client';

import { capitalize } from 'lodash';
import { useAppNav } from '@/hooks';
import { navData } from '@/utils';

const NavButtonsList = () => {
  const { setMainPathname, activeSectionName } = useAppNav();

  return (
    <>
      {navData.map(({ name, Icon }) => (
        <li
          data-testid={`nav-link-${name}`}
          key={name}
          onClick={() => setMainPathname(name)}
          className={`flex items-center pl-2 gap-4 text-gray-400 h-11 mb-2 rounded-lg cursor-pointer ${activeSectionName === name ? 'bg-purple text-white' : ''} `}
        >
          {<Icon className="w-6 h-6 " />}
          <span className="text-sm">{capitalize(name)}</span>
        </li>
      ))}
    </>
  );
};

export default NavButtonsList;
