/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { DEVICE_SIZES } from '../../helpers/DeviceHelper';
import { HEADER_HEIGHT, HEADER_SPACING } from '../header/Header.styles';

export const Container = styled.div<{ isVisible: boolean; hasBasketItems: boolean }>`
    position: absolute;
    width: 250px;
    background: whitesmoke;
    z-index: 1;
    right: ${HEADER_SPACING}px;
    top: ${HEADER_HEIGHT}px;
    padding: 10px;
    border: 0.5px solid #afafaf;
    @media (max-width: ${DEVICE_SIZES.mobileM}) { 
        display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    }
    @media (min-width: ${DEVICE_SIZES.mobileM}) { 
        display: ${({ hasBasketItems }) => (hasBasketItems ? 'block' : 'none')};
    }
    
        
    
`;

export const BasketItemContainer = styled.div<{ isFirst: boolean }>`
    display: flex;
    flex-direction: column;
    ${({ isFirst }) => !isFirst && 'margin-top: 10px;'}
`;

export const BasketMbsContainer = styled.span`
    background: forestgreen;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    color: #fff;
`;

export const BasketHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex: 1;
`;

export const BasketItemPrice = styled.div`
    flex: 1;
`;
