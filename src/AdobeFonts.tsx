import React, { ReactNode, useEffect } from 'react'

export type AdobeFontsProps = {
  kitId: string
  onLoading?: () => void
  onActive?: () => void
  onInactive?: () => void
  onFontLoading?: (fontFamily: string, fontVariation: string) => void
  onFontActive?: (fontFamily: string, fontVariation: string) => void
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
