import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
console.log("test")

//ターミナルにtestとlogが出力される
console.log("test")


//testに遷移する関数
const test = () => {
    location.href = "/my-app/test"
}

export default function Home() {
  return (
    <>
      <button onClick={test}>testに遷移</button>
    </>
  )
}
