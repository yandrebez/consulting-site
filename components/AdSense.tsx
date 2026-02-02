"use client"

import { useEffect } from "react"

export default function AdSense() {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error("Adsense error", e)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3600333644849202" // Publisher ID
      data-ad-slot="9690918371"               // Ad Unit ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
