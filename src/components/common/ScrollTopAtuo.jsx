import React, { useEffect } from 'react'

export default function ScrollTopAtuo() {
  return (
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [])
  )
}

