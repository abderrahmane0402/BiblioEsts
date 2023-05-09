"use client";
import Header from "@/ui/Header";
import Button from "@/ui/Button";
import { getTitle } from "@/utils/dashboard";

export function PageHeader2({}) {
  const title = getTitle();
  return (
    <>
      <Header size={"md"}>Liste des {title?.toLowerCase() + "s"}</Header>
      <Button size={"auto"} type={"submit"}>
        ajouter {title?.toLowerCase()}
      </Button>
    </>
  );
}
