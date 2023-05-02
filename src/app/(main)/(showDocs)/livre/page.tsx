'use client'
import DataTable from '@/components/DataTable'
import { LivreColumns } from '@/data/tableColumns'
import { Livre } from '@/types'
import React from 'react'

const Livres : Livre = {
  id:1,
  pgImg:'/ESTS.jpg',
  titre:'hello world',
  autheur:'abderrahmane',
  categorie:'fantasy',
  code:223448,
  dateE:new Date(),
  editeur:'monaco editor',
  obser:null,
  prix:60,
  somaire:'PDF'
}

const Livre = () => {
  return (
    <div className='w-full h-full'>
      <DataTable columns={LivreColumns} rows={[
        Livres
      ]} />
    </div>
  )
}

export default Livre