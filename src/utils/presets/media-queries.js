import { breakpoints } from "./breakpoints"

export const mediaQueries = {}
for (const breakpoint in breakpoints) {
  if (breakpoints.hasOwnProperty(breakpoint)) {
    mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
  }
}
