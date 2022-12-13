/* eslint-disable max-len */
import React from 'react';
import {
  BasketAction,
  BasketItemsProps, BASKET_ADD, BASKET_INSERT, BASKET_REMOVE,
} from '../types/BasketTypes';

export const add = (item: BasketItemsProps) => (dispatch : React.Dispatch<BasketAction>) => dispatch({ type: BASKET_ADD, payload: item });

export const remove = (item: BasketItemsProps) => (dispatch: React.Dispatch<BasketAction>) => dispatch({ type: BASKET_REMOVE, payload: item });

export const insert = (item: BasketItemsProps) => (dispatch: React.Dispatch<BasketAction>) => dispatch({ type: BASKET_INSERT, payload: item });
