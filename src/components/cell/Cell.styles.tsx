/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div<{ centered?: boolean; selected?: boolean; isMatchHeading: boolean }>`
    display: flex;
    flex: 1;
    align-items: center;
    ${({ centered }) => centered && `
        justify-content: center;
        cursor: pointer;
    `}
    ${({ selected }) => selected && `
        background: #fc0;
    `}
    ${({ isMatchHeading }) => !isMatchHeading && `
        background: #eee;
    `}
`;
