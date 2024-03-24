import { NavSections } from '@/enums';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type useAppNavReturnType = {
  activeSectionName: string | null;
  setMainPathname: (newPath: NavSections | null) => void;
};

export const useAppNav = (): useAppNavReturnType => {
  const { replace } = useRouter();
  const pathName = usePathname();
  const [activeSectionName, setActiveSectionName] = useState<string | null>(
    null
  );

  const getActiveSection = useCallback(() => {
    const activeSection = pathName.split('/');

    setActiveSectionName(activeSection[1]);
  }, [pathName]);

  useEffect(() => {
    getActiveSection();
  }, [getActiveSection]);

  const setMainPathname = useCallback(
    (newPath: NavSections | null) => {
      replace(`/${newPath}`);
    },
    [replace]
  );

  return {
    setMainPathname,
    activeSectionName
  };
};
