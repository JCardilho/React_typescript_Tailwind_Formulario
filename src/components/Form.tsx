import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" placeholder="Insira seu e-mail" />
      </div>
      <div>
        <a href="#">Leia os Termos</a>
        <div>
            <input type="checkbox"  />
            <label>Concordo com os Termos</label>
          
        </div>
      </div>
    </form>
  );
};
export default Form;
