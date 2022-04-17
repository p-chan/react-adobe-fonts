# react-adobe-fonts

> A React library to use Adobe Fonts

## Install

```sh
npm install react-adobe-fonts
```

or

```sh
yarn add react-adobe-fonts
```

## Usage

### Component

```tsx
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
      <AdobeFonts kitId="xxx" onLoading={onLoading} onActive={onActive} />

      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      <div>isActive: {isActive ? 'true' : 'false'}</div>
    </div>
  )
}
```

### Hooks

```tsx
import { useCallback, useState } from 'react'
import { useAdobeFonts } from 'react-adobe-fonts'

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

  useAdobeFonts({
    kitId: 'xxx',
    onLoading,
    onActive,
  })

  return (
    <div>
      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      <div>isActive: {isActive ? 'true' : 'false'}</div>
    </div>
  )
}
```

### Parameters

| Parameter        | Description                                                                                                                                                                           | Required |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| `kitId`          | This value is Project ID.                                                                                                                                                             | `true`   |
| `onLoading`      | This callback is triggered when all fonts have been requested.                                                                                                                        | `false`  |
| `onActive`       | This callback is triggered when the fonts have rendered.                                                                                                                              | `false`  |
| `onInactive`     | This callback is triggered when the browser does not support linked fonts _or_ if none of the fonts could be loaded.                                                                  | `false`  |
| `onFontLoading`  | This callback is triggered once for each font that's loaded. The callback is called with the family name as the first argument and font variation description as the second argument. | `false`  |
| `onFontActive`   | This callback is triggered once for each font that renders. The callback is called with the family name as the first argument and font variation description as the second argument.  | `false`  |
| `onFontInactive` | This callback is triggered if the font can't be loaded. The callback is called with the family name as the first argument and font variation description as the second argument.      | `false`  |

See the [Adobe Fonts Guide Line](https://helpx.adobe.com/fonts/using/embed-codes.html) for more details.

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
