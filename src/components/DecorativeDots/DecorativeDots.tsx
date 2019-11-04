import * as React from "react"
import sample from "lodash.sample"

import { getLikelihoodOfBeingBlank } from "./DecorativeDots.helpers"
import Dot, { DotProps } from "./Dot"

interface DecorativeDotsProps {
  width: number
  height: number
  dotSize: number
  angle?: number
  fadeStrength?: number
}

const COLORS = [
  `#FFDF37`,
  `#BC027F`,
  `#159BF3`,
  `#B17ACC`,
  `#59C156`,
  `#663399`,
  `#05F7F4`,
  `#FFD280`,
  `#00BDB6`,
  `#F2C4E3`,
  `#FF5A54`,
  `#A1DA9E`,
  `#CCFFFC`,
  `#FB8400`,
]

// Every circle is given a random opacity, but it's weighted so that outliers
// don't happen much.
const OPACITIES = [0.15, 0.25, 0.25, 0.25, 0.5, 0.5, 0.75]

const generateDotData = (
  numRows: number,
  numCols: number,
  angle: number,
  dotSize: number,
  fadeStrength: number
): Array<DotProps> => {
  const dots = []

  const dotSpacing = Math.round(dotSize / 10)
  const totalDotSpace = dotSize + dotSpacing

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      const likelihoodOfBeingBlank = getLikelihoodOfBeingBlank(
        angle,
        colIndex,
        rowIndex,
        numCols,
        numRows
      )

      const isBlank = likelihoodOfBeingBlank * Math.random() < fadeStrength

      if (!isBlank) {
        dots.push({
          x: colIndex * totalDotSpace,
          y: rowIndex * totalDotSpace,
          color: sample(COLORS) as string,
          opacity: sample(OPACITIES) as number,
          size: dotSize,
        })
      }
    }
  }

  return dots
}

const dotSvgStyles = {
  // We want to let the circles at the edge of the SVG spill out, not get
  // cropped by the SVG boundaries. Cropping will naturally occur if we
  // position this SVG at an edge of the viewport =)
  overflow: `visible`,
}

const DecorativeDots: React.FC<DecorativeDotsProps> = ({
  width,
  height,
  dotSize,
  angle = 0,
  fadeStrength = 0.25,
}) => {
  const numRows = Math.floor(height / dotSize)
  const numCols = Math.floor(width / dotSize)

  const dots = generateDotData(numRows, numCols, angle, dotSize, fadeStrength)

  return (
    <svg width={width} height={height} style={dotSvgStyles}>
      {dots.map((dot, i) => (
        <Dot
          key={i}
          x={dot.x}
          y={dot.y}
          color={dot.color}
          opacity={dot.opacity}
          size={dot.size}
        />
      ))}
    </svg>
  )
}

export default React.memo(DecorativeDots)
