import Image from 'next/image'
import styles from './page.module.css'
import Time from '@mirror/components/time'
import { Weather } from '@mirror/components/weather'

export default function Home() {
  return (
    <main>
      <Time></Time>
      <Weather></Weather>
    </main>
  )
}
