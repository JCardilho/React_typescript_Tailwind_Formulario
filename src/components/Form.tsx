
import { useState,FormEvent } from "react";
import { User } from "../types/User";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Formulário enviado com sucesso! aos 28:04 do video");        
    }


  return (
    <form className="flex flex-col  gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">Nome</label>
        <input type="text" placeholder="Digite seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">E-mail</label>
        <input type="email" placeholder="Insira seu e-mail" className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400" />
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2 ">Leia os Termos</a>
        <div className="flex gap-2 items-center">
            <input type="checkbox"  />
            <label className="text-sm" htmlFor="agree">Concordo com os Termos</label>
          
        </div>
      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
    </form>
  );
};
export default Form;
