import { EventItemDetails } from '../../schema/Events';

export const BASKET_ADD = '@@basket/ADD';
export const BASKET_REMOVE = '@@basket/REMOVE';
export const BASKET_INSERT = '@@basket/INSERT';

export interface BasketItemsProps {
  item : EventItemDetails;
  selected: number
}

export interface BasketStateProps {
  basketItems: BasketItemsProps[];
}

export interface BasketAction {
  type: string;
  payload: BasketItemsProps;
}
