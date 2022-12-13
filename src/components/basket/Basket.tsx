import React, { useState } from 'react';
import { useBasket } from '../../context/providers/BasketProvider';
import BasketCard from '../basket-card/BasketCard';
import { BasketContainer, BasketCount } from './Basket.styles';

export default function Basket() {
  const { basketPrice, state } = useBasket();

  const price = state.basketItems.length ? basketPrice : 0;
  const priceLabel = `${price.toFixed(2)} ₺`;

  const [isVisible, setisVisible] = useState(false);

  const onBasketClick = () => {
    setisVisible(!isVisible);
  };

  return (
    <>
      <BasketContainer onClick={onBasketClick}>
        <BasketCount>
          {priceLabel}
        </BasketCount>
      </BasketContainer>
      <BasketCard isVisible={isVisible} />
    </>
  );
}
