/* eslint-disable import/prefer-default-export */
import { BasketItemsProps } from '../context/types/BasketTypes';
import { matchValuesResolver } from '../resolvers/ColumnResolver';

export const calculateBasketPrice = (items: BasketItemsProps[]) => {
  const totalPrice = items.reduce((acc, item) => {
    const foundPrice = matchValuesResolver(item.selected, item.item);
    return acc * parseFloat(foundPrice);
  }, 1);

  return totalPrice;
};
