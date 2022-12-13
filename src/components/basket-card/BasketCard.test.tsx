/* eslint-disable max-len */
import { renderHook, waitFor, act } from '@testing-library/react';

import React from 'react';
import { BasketProvider, useBasket } from '../../context/providers/BasketProvider';
import { EVENT_ID_LIST, EVENT_LIST } from '../../resolvers/EventResolver';
import { BASKET_ADD } from '../../context/types/BasketTypes';

describe('BasketProducts', () => {
  it('Should add and item correctly', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act

    const { result } = renderHook(() => useBasket(), {
      wrapper: ({ children }) => <BasketProvider>{children}</BasketProvider>,
    });

    const { state, dispatch } = result.current;
    await act(() => dispatch({ type: BASKET_ADD, payload: { item: EVENT_LIST[EVENT_ID_LIST[0]], selected: 4 } }));

    await waitFor(() => expect(state.basketItems).toHaveLength(1));
  });
});
