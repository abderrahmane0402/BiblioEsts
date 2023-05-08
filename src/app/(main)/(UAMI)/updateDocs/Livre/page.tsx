"use client"
import * as f from "@/components/Form"
import Button from "@/ui/Button"
import Header from "@/ui/Header"
import Input from "@/ui/Input"

const page = () => {
  return (
    <f.FormRoot className='w-full'>
      <div className='flex flex-wrap w-full'>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
          <f.FormField name='title' className='w-full'>
            <div className='w-full'>
              <Header size={"md"} className='p'>
                Titre :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                modifier le titre
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier un titre valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-10'
                name='title'
                type='text'
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* autheur */}
          <f.FormField name='autheur' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Autheur :</Header>
              <f.FormMessage match={"valueMissing"}>
                modifier l{"'"}autheur
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier l{"'"}autheur valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-10'
                name='autheur'
                type='text'
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>

          {/* Editeur */}

          <f.FormField name='editeur' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Editeur :</Header>
              <f.FormMessage match={"valueMissing"}>
                modifier l{"'"}éditeur
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier l{"'"}éditeur valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-10'
                name='editeur'
                type='text'
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>

          {/* Date edition */}

          <f.FormField name='date_edi' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Date d{"'"}édition :</Header>
              <f.FormMessage match={"valueMissing"}>
                modifier la date d{"'"}édition
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier la date d{"'"}édition valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-10'
                name='date_edi'
                type='date'
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>
        </div>
        <div className='w-full md:w-1/2 px-4'>
          {/* Code */}
          <f.FormField name='code' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Code :</Header>
              <f.FormMessage match={"valueMissing"}>
                modifier le code
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier le code valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-10'
                name='code'
                type='number'
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* page de garde */}
          <f.FormField name='page_garde' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Page de garde :</Header>
              <f.FormMessage match={"valueMissing"}>
                Entrer l{"'"}page de garde
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                entrer l{"'"}page de garde valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className='h-12'
                name='page_garde'
                type='file'
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>

          {/* Observation */}
          <f.FormField name='observation' className='w-full'>
            <div className='w-full'>
              <Header size={"md"}>Observation :</Header>
              <f.FormMessage match={"valueMissing"}>
                modifier l{"'"}observation
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                modifier l{"'"}observation valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <textarea
                cols={50}
                rows={5}
                name='observation'
                className='h-auto w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]'
              />
            </f.FormControl>
          </f.FormField>

          {/* khassna nzido input dyal categorie  */}
        </div>
      </div>
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button size={"md"} className='bg-[#CA3CFF] text-white w-3/12'>
            Modifier le livre
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  )
}

export default page
