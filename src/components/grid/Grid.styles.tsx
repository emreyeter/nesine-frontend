/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../header/Header.styles';

export const Container = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
`;
