export default function showDeprecationMessage(message, level = `warning`) {
  if (process.env.NODE_ENV === `development`) {
    if (level === `error`) {
      console.error(message)
    } else {
      console.warn(message)
    }
  }
}
