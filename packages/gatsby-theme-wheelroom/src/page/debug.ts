// Use sparsely. Intended for having debug info available at production time.
// Enable verbose logging in your browser and set window.DEBUG to true. Then
// navigate to another page and watch the console.
//

declare global {
  interface Window {
    DEBUG: boolean
  }
}

export const pageDebug = (topic: string, ...vars: any): void => {
  if (typeof window === 'undefined') {
    return
  }
  if (!window.DEBUG) {
    return
  }

  console.debug(topic + ':', vars)
}
