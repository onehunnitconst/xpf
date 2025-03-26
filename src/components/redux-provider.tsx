'use client';

import { Provider } from 'react-redux';
import store from '../utils/redux/store';

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
