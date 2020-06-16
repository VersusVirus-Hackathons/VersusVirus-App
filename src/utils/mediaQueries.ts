import { css } from "styled-components";

export const SIZES = {
  desktop: 992, // TODO
};
// Iterate through the sizes and create a media template
export default Object.keys(SIZES).reduce(
  (acc, label): { desktop: any; tablet: any } => {
    acc[label] = (first: any, ...args) => css`
      @media (min-width: ${SIZES[label] / 16}em) {
        ${css(first, ...args)}
      }
    `;

    return acc;
  },
  { desktop: null, tablet: null },
);

export const ie11 = (first: any, ...args) => css`
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    ${css(first, ...args)}
  }
`;
