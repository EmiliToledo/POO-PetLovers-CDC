import React, { useEffect, useState } from 'react';
import Navbar from '../componentes/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import Api from "../../Api";
import Cliente from '../../modelo/cliente';

export default function App() {
  const [clientes, setClients] = useState<any[]>([]);

  useEffect(() => {
    Api
      .get("/cliente/clientes", {
        validateStatus: (status) => status >= 200 && status < 400,
      })
      .then((response) => {
        if (response.status === 302) {
          // Redirecionamento detectado
          const redirectUrl = response.headers.location;
          // Faça uma nova solicitação para a URL de redirecionamento
          Api.get(redirectUrl)
            .then((redirectResponse) => {
              // Carregue a lista de clientes com a resposta do redirecionamento
              setClients(redirectResponse.data);
            })
            .catch((err) => {
              console.error("Erro ao obter a lista de clientes após o redirecionamento", err);
            });
        } else {
          // Resposta de sucesso
          setClients(response.data);
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro", err);
      });
  }, []);    

  return (
    <div style={{ marginTop: '100px', width: '1000px', marginLeft: '130px', borderRadius: '50px' }}>
      <table className="table table-hover table-bordered mt-5">
        <thead className="table-light">
        </thead>
        <tbody className="table-group-divider">
          {clientes && clientes.map((cliente, index) => (
            <tr key={cliente.getId()}>
              <th scope="row">{index + 1}</th>
              <td>{cliente.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    // ...
  );
}