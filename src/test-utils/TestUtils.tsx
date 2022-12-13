/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BasketProvider } from '../context/providers/BasketProvider';

interface ProviderWrapperProps {
  children: React.ReactNode;
}

function ProviderWrapper({ children } : ProviderWrapperProps) {
  return (
    <BasketProvider>
      {children}
    </BasketProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: ProviderWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
