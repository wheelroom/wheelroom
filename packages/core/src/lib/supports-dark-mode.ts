export const supportsDarkMode = () => {
  const isServer = typeof window === 'undefined'
  return (
    !isServer &&
    window.matchMedia('(prefers-color-scheme: dark)').matches === true
  )
}
