import { ComplexObject } from '@/services/types';
import { createContext, ReactElement, useMemo, useState } from 'react';

export const CurrentPageContext = createContext<ComplexObject | null>(null);

export const CurrentPageContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [currentPage, setCurrentPage] = useState('home');

  const valueCurrentPageContext = useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage]
  );

  return (
    <CurrentPageContext.Provider value={valueCurrentPageContext}>
      {children}
    </CurrentPageContext.Provider>
  );
};
