import React from "react";
import "./Produtos.css";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      <h2>Produtos</h2>
      {produtos.map((produto) => {
        return (
          <div className="produto">
            <p>{produto.nome}</p>
            <ul>
              <li>{produto.propriedades[0]}</li>
              <li>{produto.propriedades[1]}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Produtos;
