/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext, useReducer, useMemo,
} from 'react';
import { calculateBasketPrice } from '../../helpers/BasketHelper';
import BasketReducer from '../reducers/BasketReducer';
import {
  BasketAction,
  BasketStateProps,
} from '../types/BasketTypes';

interface BasketContextType {
  state: BasketStateProps;
  dispatch: React.Dispatch<BasketAction>;
  basketPrice: number;
}

export const basketInitialState :BasketStateProps = {
  basketItems: [],
};

export const BasketContext = createContext<BasketContextType>({
  state: basketInitialState,
  dispatch: () => {},
  basketPrice: 0,
});

interface BasketProviderProps {
  children: React.ReactNode;
}

export function BasketProvider(props: BasketProviderProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(BasketReducer, basketInitialState);

  const basketPrice = calculateBasketPrice(state.basketItems);

  const providerValues = useMemo(
    () => ({
      state, dispatch, basketPrice,
    }),
    [
      state, dispatch, basketPrice,
    ],
  );

  return (
    <BasketContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={providerValues}
    >
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => {
  const { state, dispatch, basketPrice } = React.useContext(BasketContext);
  return { state, dispatch, basketPrice };
};
