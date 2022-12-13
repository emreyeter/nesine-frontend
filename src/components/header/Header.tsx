import React from 'react';
import { EVENT_ID_LIST } from '../../resolvers/EventResolver';
import Basket from '../basket/Basket';
import { Container } from './Header.styles';

export default function Header() {
  const eventCountLabel = `Event Count: ${EVENT_ID_LIST.length}`;

  return (
    <Container>
      {eventCountLabel}
      <Basket />
    </Container>
  );
}
