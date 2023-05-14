
import * as f from "@/components/Form"
import InputSelect from "@/components/ui/Select";
import { setPfe } from "@/db/Post/Pfe";
import { filiere } from "@/types";
import Button from "@/ui/Button"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
// import { MenuItem } from "@mui/material";

async function addPfe(data: FormData) {
  "use server";
  const Pfe= {// Assign a default or null value depending on your requirements
    SUJET: data.get("sujet") as string,
    REALISATEUR: data.get("realisateur") as string,
    ENCADRANT: data.get("encadrant") as string,
    DATE_REALISATION: parseInt(data.get("date_realis") as string) || null,
  }
  
    await setPfe(Pfe);
  
}
const Filière : filiere[]  = [
  {
    ID_FIL: 1,
    LIBELLE : "Génie Informatique (GI) "

  },
  {
    ID_FIL: 2,
    LIBELLE : "TECHNIQUES DE MANAGEMENT (TM) "
  },
  {
    ID_FIL: 3,
    LIBELLE : "TECHNIQUES INSTRUMENTALES & MANAGEMENT DE LA QUALITÉ (TIMQ)"
  },
  {
    ID_FIL: 4,
    LIBELLE : "GÉNIE INDUSTRIEL & MAINTENANCE (GIM)"
  }

]

const page = () => {
  return (
    <f.FormRoot
      className='w-full '
      action={addPfe}
      //</>onSubmit={handleSubmit}
    >
      {/* sujet */}

      <f.FormField name='sujet' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Sujet :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le sujet</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un sujet valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='sujet'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            
          />
        </f.FormControl>
      </f.FormField>
      {/* realisateur */}

      <f.FormField name='realisateur' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Réalisateur :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nom de realisateur
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom de realisateur valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='realisateur'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            
          />
        </f.FormControl>
      </f.FormField>
      {/* encadrant */}
      <f.FormField name='encadrant' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Encadrant :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nom d{"'"}encadrant
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom d{"'"}encadrant valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='encadrant'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            
          />
        </f.FormControl>
      </f.FormField>
      {/* date_realis */}
      <f.FormField name='date_realis' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Date de réalisation :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir la date de réalisation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une date de réalisation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='date_realis'
            type='date'
            // onChange={(e) => setEmail(e.target.value)}
            
          />
        </f.FormControl>
      </f.FormField>
      
      {/* Filiere */}
      {/* <f.FormField name='filiere' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Date de réalisation :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            Choisir une filiere
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une filiere valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild> */}
          {/* <InputSelect autoWidth={false} multiple={false} native={false} >
             {Filière.map((option) => (
        <MenuItem  key={option.ID_FIL} value={option.ID_FIL}>
          {option.LIBELLE}
        </MenuItem>
      // ))}
      // </InputSelect> */}
      {/* //   </f.FormControl> */}
      {/* </f.FormField>  */}
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button size={"md"} className='bg-[#CA3CFF] text-white w-3/12'>
            Ajouter un Pfe
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  )
}

export default page
