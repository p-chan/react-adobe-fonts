import React, { ReactNode, useEffect } from 'react'

export type AdobeFontsProps = {
  kitId: string
  /** This callback is triggered when all fonts have been requested. */
  onLoading?: () => void
  /** This callback is triggered when the fonts have rendered. */
  onActive?: () => void
  /** This callback is triggered when the browser does not support linked fonts *or* if none of the fonts could be loaded. */
  onInactive?: () => void
  /** This callback is triggered once for each font that's loaded. The callback is called with the family name as the first argument and font variation description as the second argument. */
  onFontLoading?: (fontFamily: string, fontVariation: string) => void
  /** This callback is triggered once for each font that renders. The callback is called with the family name as the first argument and font variation description as the second argument. */
  onFontActive?: (fontFamily: string, fontVariation: string) => void
  /** This callback is triggered if the font can't be loaded. The callback is called with the family name as the first argument and font variation description as the second argument. */
  onFontInactive?: (fontFamily: string, fontVariation: string) => void
}

export const useAdobeFonts = ({
  kitId,
  onLoading,
  onActive,
  onInactive,
  onFontLoading,
  onFontActive,
  onFontInactive,
}: AdobeFontsProps) => {
  useEffect(() => {
    const config = {
      kitId,
      scriptTimeout: 3000,
      async: true,
      loading: onLoading,
      active: onActive,
      inactive: onInactive,
      fontloading: onFontLoading,
      fontactive: onFontActive,
      fontinactive: onFontInactive,
    }

    const d = window.document
    const h = d.documentElement
    const s = d.getElementsByTagName('script')[0]
    const t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
    }, config.scriptTimeout)
    const tk = d.createElement('script')

    let a
    let f = false

    h.className += ' wf-loading'

    tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
    tk.async = true

    tk.onload = (tk as any).onreadystatechange = function () {
      a = this.readyState

      if (f || (a && a != 'complete' && a != 'loaded')) return

      f = true

      clearTimeout(t)

      try {
        ;(window as any).Typekit.load(config)
      } catch (e) {}
    }

    if (s.parentNode == undefined) return

    s.parentNode.insertBefore(tk, s)
  }, [])
}

export const AdobeFonts = (props: AdobeFontsProps & { children?: ReactNode }) => {
  useAdobeFonts({
    kitId: props.kitId,
    onLoading: props.onLoading,
    onActive: props.onActive,
    onInactive: props.onInactive,
    onFontLoading: props.onFontLoading,
    onFontActive: props.onFontActive,
    onFontInactive: props.onFontInactive,
  })

  return <>{props.children}</>
}
