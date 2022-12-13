import { EventItemDetails } from '../schema/Events';

export const COLUMNS = [['D', 'DAY', 'LN'], 'Yorumlar', '1', 'x', '2', 'Alt', 'Üst', 'H1', '1', 'x', '2', 'H2', '1-X', '1-2', 'X-2', 'Var', 'Yok', '+99'];
export const COLUMN_WIDTHS = [280, 80].concat(new Array(COLUMNS.length - 2).fill(35));

export const ROW_VALUES = [
  ['C', 'T', 'N'],
  'Yorumlar',
  { OCG: { 1: { OC: { 0: 'O' } } } },
  { OCG: { 1: { OC: { 1: 'O' } } } },
  { OCG: { 1: { OC: { 2: 'O' } } } },
  { OCG: { 5: { OC: { 25: 'O' } } } },
  { OCG: { 5: { OC: { 26: 'O' } } } },
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  { OCG: { 2: { OC: { 3: 'O' } } } },
  { OCG: { 2: { OC: { 4: 'O' } } } },
  { OCG: { 2: { OC: { 5: 'O' } } } },
  undefined,
  undefined,
  undefined,
];

export const matchRowResolver = (column: number, row : EventItemDetails, isValueRead) => {
  const method = isValueRead ? matchValuesResolver : matchColumnsResolver;
  return method(column, row);
};

export const matchColumnsResolver = (column: number, row : EventItemDetails) => {
  const columnSelected = COLUMNS[column];
  if (typeof columnSelected === 'string') {
    return columnSelected;
  }

  return columnSelected?.map((columnMap) => row?.[columnMap]).join(' ');
};

// eslint-disable-next-line max-len
export const matchValuesResolver = (column: number, row : EventItemDetails, getSpecificKey? : string) => {
  const rowSelected = ROW_VALUES[column];
  if (typeof rowSelected === 'string' || rowSelected === undefined) {
    return (rowSelected ?? '');
  }

  if (Array.isArray(rowSelected)) {
    return rowSelected?.map((columnMap) => row?.[columnMap]).join(' ');
  }

  return getValueByJsonPath(rowSelected, row, getSpecificKey);
};

const getValueByJsonPath = (json: object, row: object, getSpecificKey? : string) => {
  const [key, value] : [key : string, value: string] = Object.entries(json)[0];

  if (typeof value === 'string') {
    return row?.[key]?.[getSpecificKey ?? value] ?? '';
  }
  return getValueByJsonPath(json?.[key], row?.[key], getSpecificKey);
};
