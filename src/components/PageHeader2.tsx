"use client"
import Header from "@/ui/Header"
import Button from "@/ui/Button"
import { getTitle } from "@/utils/dashboard"
import Link from "next/link"

export function PageHeader2() {
  const title = getTitle()
  return (
    <>
      <Header size={"md"}>Liste des {title?.toLowerCase() + "s"}</Header>
      <Link href={`/addDocs/${title?.toLowerCase()}`}>
        <Button size={"auto"} type={"submit"}>
          ajouter {title?.toLowerCase()}
        </Button>
      </Link>
    </>
  )
}
