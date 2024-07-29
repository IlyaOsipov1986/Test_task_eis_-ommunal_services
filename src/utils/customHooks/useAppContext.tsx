import { useContext } from 'react';
import AppContext from '../../context/AppContext.tsx';

const useAppContext = () => {
  return useContext(AppContext);
};
export default useAppContext;
