"use client";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Paragraph from "@/components/ui/Paragraph";
import { FC, FormEvent, useState } from "react";
import * as f from "@/components/Form";
import Button from "@/components/ui/Button";
import MLink from "@/components/ui/MLink";
interface Sign_UpProps {}

const Sign_Up: FC<Sign_UpProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [username, setUszeN] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email + pass);
  };

  
    return (
      <div className="flex flex-col items-center">
        <Header>Sign Up</Header>
        <Paragraph type={"sub_title"} size={"sm"}>
          Create your account
        </Paragraph>
        <f.FormRoot
          className="w-4/5 flex flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit}
        >
          <f.FormField name="username">
            <div className="flex justify-between">
              <f.FormLabel>Username :</f.FormLabel>
              <f.FormMessage match={"valueMissing"}>
                saisir votre username
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un username valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                name="username"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                maxLength={40}
                required
              />
            </f.FormControl>
          </f.FormField>
          <f.FormField name="email">
            <div className="flex justify-between">
              <f.FormLabel>Email :</f.FormLabel>
              <f.FormMessage match={"valueMissing"}>
                saisir votre email
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un email valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                maxLength={40}
                required
              />
            </f.FormControl>
          </f.FormField>
          <f.FormField name="pass">
            <div className="flex justify-between">
              <f.FormLabel>Password :</f.FormLabel>
              <f.FormMessage match={"tooShort"}>
                minimum 8 caractere
              </f.FormMessage>
              <f.FormMessage match={"valueMissing"}>
                Please enter your password
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                name="pass"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                minLength={8}
                required
              />
            </f.FormControl>
          </f.FormField>
          <f.FormSubmit asChild>
            <Button size={"md"} btype={"submit"}>
              {""} Sign Up {""}
            </Button>
          </f.FormSubmit>
        </f.FormRoot>
      <MLink type={"link"} className="text-blue-500 mb-4" href={"/signIn"}>Login</MLink>

      </div>
    );
  
};
export default Sign_Up;
