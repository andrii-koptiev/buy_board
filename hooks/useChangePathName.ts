import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

type useChangePathNameReturnType = {
  setSectionPath: (newPath: string) => void;
};

export const useChangePathName = () => {
  const { push } = useRouter();

  const setSectionPath = useCallback(
    (newPath: string) => {
      push(`/${newPath}`);
    },
    [push]
  );

  return {
    setSectionPath
  };
};
