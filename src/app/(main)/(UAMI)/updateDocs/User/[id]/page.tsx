import * as f from "@/components/Form"
import Input from "@/ui/Input"
import Form from "./Form"
import { getUtilisateur } from "@/db/Get/Utilisateur"
import Header from "@/components/mui/MuiHeader"

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { id: string } }) => {
  // const data = await getCategories_Select();
  const id = parseInt(params.id)
  const User = await getUtilisateur(id)
  return (
    <Form id={id}>
      {/* Nom */}
      <f.FormField name='nom_user' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Nom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le nom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='nom_user'
            type='text'
            required
            defaultValue={User!.NOM as string}
          />
        </f.FormControl>
      </f.FormField>
      {/* prenom */}
      <f.FormField name='prenom_user' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Prenom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le prenom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un prenom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='prenom_user'
            defaultValue={User!.PRENOM as string}
            type='text'
            required
          />
        </f.FormControl>
      </f.FormField>
      {/* telephone */}
      <f.FormField name='telep_user' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Téléphone :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le numero de telephone{" "}
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un numero de telephone valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='telep_user'
            type='number'
            defaultValue={User!.TELEPHONE as number}
            required
          />
        </f.FormControl>
      </f.FormField>
      {/* email  */}
      <f.FormField name='email_user' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Login :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le Login</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un Login valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='login_user'
            type='text'
            defaultValue={User!.LOGIN as string}
            required
          />
        </f.FormControl>
      </f.FormField>
      {/* password */}
      <f.FormField name='password_user' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Mot de passe :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le mot de passe
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un mot de passe valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='password_user'
            type='password'
            required
          />
        </f.FormControl>
      </f.FormField>
      <f.FormField name='confirmation' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Confirmation du mot de passe :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le mot de passe
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un mot de passe valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='confirmation'
            type='password'
            required
          />
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default Page
