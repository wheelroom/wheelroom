// Use sparsely. Intended for having debug info available at production time.
// Enable verbose logging in your browser and set window.DEBUG to true. Then
// navigate to another page and watch the console.
//
export const pageDebug = (topic, ...vars) => {
    if (typeof window === 'undefined') return
    if (!window.DEBUG) return

    console.debug(topic + ':', vars)
}
