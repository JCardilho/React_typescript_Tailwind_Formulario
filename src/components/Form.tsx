import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, seterrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    seterrors(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    console.log(data, validateErrors);
    if (Object.keys(validateErrors).length > 0) {
      seterrors(validateErrors);
      return;
    }

    const currentDateTime = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setName("");
    setEmail("");
    setAgree(false);

    alert(`Obrigado por se inscrever!  ${currentDateTime} `);
  };

  return (
    <form className="flex flex-col  gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && <span className="text-xs text-red-500  mt-1">{errors.name}</span>}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2 ">
          Leia os Termos
        </a>
        <div className="flex gap-2 items-center">
          <input type="checkbox" 
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os Termos
          </label>
        </div>
        {errors?.agree && <span className="text-xs text-red-500 mt-1">{errors.agree}</span>}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};
export default Form;
