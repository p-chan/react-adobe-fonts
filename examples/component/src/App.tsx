import { useCallback, useState } from 'react'

import { AdobeFonts } from 'react-adobe-fonts'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const onLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const onActive = useCallback(() => {
    setIsLoading(false)
    setIsActive(true)
  }, [])

  return (
    <div>
      <AdobeFonts kitId="" onLoading={onLoading} onActive={onActive} />
      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      <div>isActive: {isActive ? 'true' : 'false'}</div>
    </div>
  )
}

export default App
