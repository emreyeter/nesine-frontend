/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const HEADER_HEIGHT = 50;
export const HEADER_SPACING = 20;

export const Container = styled.div`
    display: flex;
    background: #28616b;
    height: ${HEADER_HEIGHT}px;
    align-items: center;
    padding: 0 ${HEADER_SPACING}px;
`;
