import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { IGif } from '../../types';
import { BASE_LIMIT } from '../../api';

interface IContextProvider {
  children: ReactNode;
}

export interface IContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  gifs: IGif[];
  setGifs: Dispatch<SetStateAction<IGif[]>>;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

export const MyContext = createContext<IContext>({
  query: '',
  setQuery: () => {},
  gifs: [],
  setGifs: () => {},
  limit: 0,
  setLimit: () => {},
});

const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [limit, setLimit] = useState(BASE_LIMIT);

  const props = {
    query,
    setQuery,
    gifs,
    setGifs,
    limit,
    setLimit,
  };

  return <MyContext.Provider value={props}>{children}</MyContext.Provider>;
};

export default ContextProvider;
