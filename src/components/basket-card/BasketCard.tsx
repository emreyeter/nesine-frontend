import React, { useMemo } from 'react';
import { useBasket } from '../../context/providers/BasketProvider';
import { matchValuesResolver } from '../../resolvers/ColumnResolver';
import {
  BasketHeader, BasketItemContainer, BasketItemPrice, BasketMbsContainer, Container,
} from './BasketCard.styles';

interface BasketCardProps {
  isVisible: boolean;
}

export default function BasketCard(props: BasketCardProps) {
  const { isVisible } = props;
  const { state } = useBasket();

  const mappedBasket = useMemo(() => state.basketItems.map((basketItem, index) => {
    const MBS = matchValuesResolver(basketItem.selected, basketItem.item, 'MBS');
    const Price = matchValuesResolver(basketItem.selected, basketItem.item);

    const headerLabel = `${basketItem.item.N} (${basketItem.item.C})`;
    const priceLabel = `Oran : ${Price} ₺`;

    const isFirst = index === 0;

    return (
      <BasketItemContainer isFirst={isFirst} key={basketItem.item.C}>
        <BasketHeader>
          <BasketMbsContainer>
            {MBS}
          </BasketMbsContainer>
          {headerLabel}
        </BasketHeader>
        <BasketItemPrice>
          {priceLabel}
        </BasketItemPrice>
      </BasketItemContainer>
    );
  }), [state.basketItems]);

  return (
    <Container hasBasketItems={!!state.basketItems.length} isVisible={isVisible}>
      {mappedBasket}
    </Container>
  );
}
