import React, { Fragment, useEffect, useState } from "react"
import Seo from "../components/seo"
import { Banner } from "../components/Banner"
import { GetStrated } from "../components/GetStarted"
import { isInViewport } from "../utils/inViewport"
import BookADemo from "../components/BookADemo"

const IndexPage = () => {
  const [showBg, setShowBg] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  const changeBackground = () => {
    if (document.getElementById("homeBanner")) {
      if (
        window.scrollY >= document.getElementById("homeBanner").clientHeight
      ) {
        setShowBg(true)
      } else {
        setShowBg(false)
      }
    }
    if (
      document.getElementById("journeyCard") &&
      isInViewport(document.getElementById("journeyCard"))
    ) {
      setShowBg(false)
    }
    if (
      document.getElementById("footerSec") &&
      isInViewport(document.getElementById("footerSec"))
    ) {
      setShowBg(false)
    }
  }

  return (
    <Fragment>
      <Banner />
      <GetStrated />
      <BookADemo />
    </Fragment>
  )
}

export default IndexPage

export const Head = () => <Seo title="Fithub" />
