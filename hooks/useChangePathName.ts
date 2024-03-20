import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

type useChangePathNameReturnType = {
  setSectionPath: (newPath: string) => void;
};

export const useChangePathName = (): useChangePathNameReturnType => {
  const { replace } = useRouter();

  const setSectionPath = useCallback(
    (newPath: string) => {
      replace(`/${newPath}`);
    },
    [replace]
  );

  return {
    setSectionPath
  };
};
