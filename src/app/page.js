'use client'
import styles from './page.module.css'
import {useState } from 'react'
import Component from '@/components/CardComponent/Component'
import mockApiResponse from "../mockData/mockApiResponse.json"

export default function Home() {
  let sortedMockApiResponse = mockApiResponse.sort((a, b) =>  a.nome.localeCompare(b.nome))

  const [apiResponse, setApiResponse] = useState(sortedMockApiResponse)

  return (
    <main className={styles.main}>
      <Component data={apiResponse} />
    </main>
  )
}
