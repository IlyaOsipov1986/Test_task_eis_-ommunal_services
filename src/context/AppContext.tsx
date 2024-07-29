import { createContext } from 'react';
import { useStore } from '../models/RootStore';

const AppContext = createContext({});

// @ts-ignore
export const AppProvider = ({ children }) => {
  const rootStore = useStore();

  return (
    <AppContext.Provider value={{ rootStore }}>{children}</AppContext.Provider>
  );
};
export default AppContext;
