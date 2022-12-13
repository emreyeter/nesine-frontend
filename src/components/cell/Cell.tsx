import React, { memo, useContext } from 'react';
import { areEqual } from 'react-window';
import { insert } from '../../context/actions/BasketActions';
import { BasketContext } from '../../context/providers/BasketProvider';
import { matchRowResolver, ROW_VALUES } from '../../resolvers/ColumnResolver';
import { EVENT_ID_LIST, EVENT_LIST } from '../../resolvers/EventResolver';
import { EventItemDetails } from '../../schema/Events';
import { Container } from './Cell.styles';

interface CellProps {
  columnIndex: number;
  rowIndex: number;
  // eslint-disable-next-line react/require-default-props
  style?: React.CSSProperties;
}

// eslint-disable-next-line react/display-name
const Cell = memo(({ columnIndex, rowIndex, style } : CellProps) => {
  const { state, dispatch } = useContext(BasketContext);

  const isMatchHeading = rowIndex % 2 === 1;
  const matchIndex = !isMatchHeading ? rowIndex / 2 : (rowIndex - 1) / 2;
  const pickedItem: EventItemDetails = EVENT_LIST[EVENT_ID_LIST[matchIndex]];
  const resolver = matchRowResolver(columnIndex, pickedItem, isMatchHeading);

  const clickable = isMatchHeading
  && !!resolver
  && !Array.isArray(ROW_VALUES[columnIndex])
  && typeof ROW_VALUES[columnIndex] === 'object';

  const handleClick = () => {
    if (clickable) {
      insert({
        item: pickedItem,
        selected: columnIndex,
      })(dispatch);
    }
  };

  const selected = state.basketItems.find((item) => item.item.C === pickedItem.C
                                   && item.selected === columnIndex);

  return (
    <Container
      isMatchHeading={isMatchHeading}
      onClick={handleClick}
      centered={clickable}
      selected={selected}
      style={style}
    >
      {resolver}
    </Container>
  );
}, areEqual);

export default Cell;
