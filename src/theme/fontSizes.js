import { fontSizes as baseFontSizes } from "gatsby-design-tokens"

const fontSizes = baseFontSizes.map(item => `${item / 16}rem`)

export default fontSizes

/*

0: "0.75rem"
1: "0.875rem"
2: "1rem"
3: "1.125rem"
4: "1.25rem"
5: "1.5rem"
6: "1.75rem"
7: "2rem"
8: "2.25rem"
9: "2.625rem"
10: "3rem"
11: "3.375rem"
12: "3.75rem"
13: "4.25rem"
14: "4.75rem"
15: "5.25rem"
16: "5.75rem"

*/
