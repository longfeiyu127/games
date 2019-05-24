export const loadScript = (url: string, callback = (url: string) => void 0) => {
  const head = document.getElementsByTagName('head')[0]
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onload = () => callback(url)
  head.insertBefore(script, head.firstChild)
}
