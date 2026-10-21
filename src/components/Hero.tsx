import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const check = () => {
      setDark(document.documentElement.getAttribute('data-theme') === 'dark')
    }
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <img
        className={styles.banner}
        src={dark ? '/banner2.png' : '/banner.png'}
        alt=""
      />
    </section>
  )
}

export default Hero
