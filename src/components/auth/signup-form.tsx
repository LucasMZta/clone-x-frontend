"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {

   //usado para quando ele logar, fazer ele mudar de tela
   const router = useRouter();

   const [nameField, setNameField] = useState('');
   const [emailField, setEmailField] = useState('');
   const [passwordField, setPasswordField] = useState('');

   const handleEnterButton = () => {
      //processo de cadastro
      router.replace('/home');
   }

   return (
      <>
         <Input
            type="text"
            value={nameField}
            onChange={e => setNameField(e.target.value)}
            placeholder="Digite seu nome"
         />
         <Input
            type="email"
            value={emailField}
            onChange={e => setEmailField(e.target.value)}
            placeholder="Digite seu email"
         />
         <Input
            value={passwordField}
            onChange={e => setPasswordField(e.target.value)}
            placeholder="Digite sua senha"
            autoComplete="off"
            password
         />
         <Button label="Criar Conta" onClick={handleEnterButton} />
      </>
   )
}