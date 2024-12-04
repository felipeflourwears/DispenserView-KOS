import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { useDispenser as useDispenserHook } from '../../hooks/dispenser/use-dispenser';
import { DispenserModel } from '@kos-ui/my-kos-app-model';

interface DispenserType {
  model?: DispenserModel;
}
export const Dispenser = createContext<DispenserType | undefined>(undefined);

interface DispenserProviderProps {
  id?: string;
}

export const DispenserProvider: React.FunctionComponent<
  PropsWithChildren<DispenserProviderProps>
> = ({ children }) => {
  const { model, ready } = useDispenserHook();
  const value: DispenserType = useMemo(() => {
    if (ready && model) {
      return { model };
    }
    return {};
  }, [ready, model]);
  return <Dispenser.Provider value={value}>{children}</Dispenser.Provider>;
};
export const useDispenser = () => {
  const context = useContext(Dispenser);
  if (!context) {
    throw new Error('useDispenser must be used within a DispenserProvider');
  }
  return context;
};
