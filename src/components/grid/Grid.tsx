import React from 'react';
import { VariableSizeGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { COLUMNS, COLUMN_WIDTHS } from '../../resolvers/ColumnResolver';

import Cell from '../cell/Cell';
import { Container } from './Grid.styles';
import { EVENT_ID_LIST } from '../../resolvers/EventResolver';
// import { HEADER_HEIGHT } from '../header/Header.styles';

function Grid() {
  return (
    <Container>

      <AutoSizer>
        {({ height, width }) => (
          <VariableSizeGrid
            columnCount={COLUMNS.length}
            columnWidth={(index) => COLUMN_WIDTHS[index]}
            height={height}
            rowCount={EVENT_ID_LIST.length * 2}
            rowHeight={() => 30}
            width={width}
          >
            {Cell}
          </VariableSizeGrid>
        )}
      </AutoSizer>
    </Container>
  );
}

export default React.memo(Grid);
