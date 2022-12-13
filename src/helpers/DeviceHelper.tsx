/* eslint-disable no-undef */
export const DEVICE_SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const DEVICES = Object.keys(DEVICE_SIZES).map((key) => ({
  [key]: `(max-width: ${DEVICE_SIZES[key]})`,
}));
