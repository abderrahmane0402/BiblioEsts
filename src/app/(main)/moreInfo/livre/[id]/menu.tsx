"use client"
import { Button, ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import React, { FC, useState } from "react"
import Menu from "@mui/material/Menu"
import Link from "next/link"
import { MdDeleteOutline, MdUpdate } from "react-icons/md"
import { FaChalkboardTeacher } from "react-icons/fa"
import { useRouter } from "next/navigation"
import * as Toast from "@/components/ui/toast"

interface MenuProps {
  children: React.ReactNode
}

const MenuExe: FC<MenuProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [isDeleted, setisDeleted] = useState(false)
  const [notDeleted, setnotDeleted] = useState(false)
  const router = useRouter()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div>
        <Button
          id='basic-button'
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            fontWeight: 500,
          }}
        >
          {children}
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose()
              router.push(`/addDocs/emprunt/etudiant/livre/${children}`)
            }}
          >
            <ListItemIcon>
              <FaChalkboardTeacher fontSize={18} />
            </ListItemIcon>
            <ListItemText>Emprunter</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose()
              router.push(`/updateDocs/exemplaire/${children}`)
            }}
          >
            <ListItemIcon>
              <MdUpdate fontSize={18} />
            </ListItemIcon>
            <ListItemText>Modifier</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose()
              fetch(`/api/exemplaire/${children}`, {
                method: "DELETE",
              })
                .then((res) => res.text())
                .then((data) => {
                  if (data === "ok") {
                    router.refresh()
                    setisDeleted(true)
                    setTimeout(() => setisDeleted(false), 2000)
                  } else {
                    setnotDeleted(true)
                    setTimeout(() => setnotDeleted(false), 2000)
                  }
                })
            }}
          >
            <ListItemIcon>
              <MdDeleteOutline fontSize={18} />
            </ListItemIcon>
            <ListItemText>Supprimer</ListItemText>
          </MenuItem>
        </Menu>
      </div>
      <Toast.Provider>
        <Toast.Root open={isDeleted} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Exemplaire a été Supprimeé avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setisDeleted(false)}>
            <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={notDeleted} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              Exemplaire utiliser dans un livre ou comme categorie pere
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setnotDeleted(false)}>
            <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
      </Toast.Provider>
    </>
  )
}
export default MenuExe
