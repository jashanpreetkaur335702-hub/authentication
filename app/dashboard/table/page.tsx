"use client"

import { useState } from "react"
import AppTable from "@/components/common/AppTable"
import AppPagination from "@/components/common/AppPagination"

export default function TablePage() {
  const [page, setPage] = useState(1)

  const data = [
    { name: "A", email: "a@gmail.com", role: "User" },
    { name: "B", email: "b@gmail.com", role: "Admin" },
    { name: "C", email: "c@gmail.com", role: "User" },
    { name: "D", email: "d@gmail.com", role: "User" },
    { name: "E", email: "e@gmail.com", role: "User" },  
    { name: "F", email: "a@gmail.com", role: "User" },
    { name: "G", email: "b@gmail.com", role: "Admin" },
    { name: "H", email: "c@gmail.com", role: "User" },
    { name: "I", email: "d@gmail.com", role: "User" },
    { name: "J", email: "e@gmail.com", role: "User" },
  ]

  const itemsPerPage = 2
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const start = (page - 1) * itemsPerPage
  const paginatedData = data.slice(start, start + itemsPerPage)

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ]

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">Table + Pagination</h1>

      <AppTable columns={columns} data={paginatedData} />

      <AppPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

    </div>
  )
}