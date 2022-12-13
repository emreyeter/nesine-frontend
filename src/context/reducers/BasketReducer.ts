/* eslint-disable import/no-anonymous-default-export */
import {
  BasketAction, BasketStateProps, BASKET_ADD, BASKET_INSERT, BASKET_REMOVE,
} from '../types/BasketTypes';

export default (state: BasketStateProps, action : BasketAction) => {
  switch (action.type) {
    case BASKET_ADD:
      return {
        ...state,
        basketItems: [
          ...state.basketItems,
          action.payload,
        ],

      };

    case BASKET_REMOVE:
      return {
        ...state,
        basketItems: [...state.basketItems.filter(
          (item) => item.item.C !== action.payload.item.C,
        )],
      };
    case BASKET_INSERT:
    {
      let newBasketItems = [...state.basketItems];
      const found = state.basketItems.find((mapped) => mapped.item.C === action.payload.item?.C);
      const selected = state.basketItems.find((mapped) => mapped.item.C === action.payload.item?.C
       && mapped.selected === action.payload.selected);

      if (found) {
        newBasketItems = newBasketItems.filter(
          (item) => item.item.C !== action.payload.item?.C,
        );
      }
      if (!selected) {
        newBasketItems.push(action.payload);
      }

      return {
        ...state,
        basketItems: newBasketItems,
      };
    }

    default:
      return state;
  }
};
