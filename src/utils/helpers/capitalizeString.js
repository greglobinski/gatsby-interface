const capitalizeString = ({ str }) => {
  if (typeof str !== `string`) {
    throw new Error(`param.str must be typeof \`string\``)
  }

  return str
    .split(` `)
    .map(
      word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    )
    .join(` `)
}

export default capitalizeString
