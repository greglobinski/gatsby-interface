function newLineToBr(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, `<br />`)
}

export default newLineToBr
