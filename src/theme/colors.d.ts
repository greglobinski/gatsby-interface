// TODO remove this file once ./colors.js is rewritten to TypeScript

type Shade = 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5;

type FadeShade = 80 | 70 | 60 | 50 | 30 | 10;

const colors: {
  purple: Record<Shade, string>;
  orange: Record<Shade, string>;
  yellow: Record<Shade, string>;
  red: Record<Shade, string>;
  magenta: Record<Shade, string>;
  blue: Record<Shade, string>;
  teal: Record<Shade, string>;
  green: Record<Shade, string>;
  grey: Record<Shade, string>;
  white: string;
  black: string;
  gatsby: string;
  // legacy shortcuts
  // most of these should be refactored to role-based tokens as we flesh those out
  lilac: string;
  lavender: string;
  accent: string;
  warning: string;
  // semi-transparent colors
  blackFade: Record<FadeShade, string>;
  whiteFade: Record<FadeShade, string>;
  // role-based tokens
  ui: {
    background: string;
    hover: string;
    border: {
      subtle: string;
    };
  };
  link: {
    color: string;
    border: string;
    hoverBorder: string;
  };
  text: {
    header: string;
    primary: string;
    secondary: string;
    placeholder: string;
  };
  input: {
    border: string;
    focusBorder: string;
    focusBoxShadow: string;
  };
  code: {
    bgInline: string;
    bg: string;
    border: string;
    text: string;
    remove: string;
    add: string;
    selector: string;
    tag: string;
    keyword: string;
    comment: string;
    punctuation: string;
    regex: string;
    cssString: string;
    invisibles: string;
    scrollbarThumb: string;
    lineHighlightBorder: string;
  };
}

export = colors
