import { productMockData } from '@/mocks/productMockData';
import { TCard } from '@/services/types';
import { ReactElement, createContext } from 'react';

export const CardDataContext = createContext<TCard[] | null>(null);

export const CardDataContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <CardDataContext.Provider value={productMockData}>
      {children}
    </CardDataContext.Provider>
  );
};
