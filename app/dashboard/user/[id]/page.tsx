"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function UserId() {
    const userId=useParams()
    console.log(userId);
  return (
    <div>UserId: {userId.id}</div>
  )
}
