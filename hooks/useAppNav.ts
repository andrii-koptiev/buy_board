import { NavSections } from '@/enums';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type useAppNavReturnType = {
  activeSectionName: NavSections | null;
  setMainPathname: (newPath: NavSections | null) => void;
};

export const useAppNav = (): useAppNavReturnType => {
  const { replace } = useRouter();
  const [activeSectionName, setActiveSectionName] =
    useState<NavSections | null>(null);

  const setMainPathname = useCallback(
    (newPath: NavSections | null) => {
      replace(`/${newPath}`);
      setActiveSectionName(newPath);
    },
    [replace]
  );

  return {
    setMainPathname,
    activeSectionName
  };
};
