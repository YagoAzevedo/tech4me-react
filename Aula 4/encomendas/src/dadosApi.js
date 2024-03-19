const todasEncomendas = [
  {
    number: "0001",
    cliente: "João da Silva",
    ultimoStatus: "entregue",
    historico: [
      {
        status: "pedido-feito",
        data: "04/01/2024",
      },
      {
        status: "em-rota",
        data: "05/01/2024",
      },
      {
        status: "entregue",
        data: "10/01/2024",
      },
    ],
  },
  {
    number: "0002",
    cliente: "Maria",
    ultimoStatus: "entregue",
    historico: [
      {
        status: "pedido-feito",
        data: "19/01/2024",
      },
      {
        status: "em-rota",
        data: "20/01/2024",
      },
      {
        status: "entregue",
        data: "27/01/2024",
      },
    ],
  },
  {
    number: "0003",
    cliente: "José",
    ultimoStatus: "entregue",
    historico: [
      {
        status: "pedido-feito",
        data: "02/02/2024",
      },

      {
        status: "em-rota",
        data: "03/02/2024",
      },
      {
        status: "entregue",
        data: "05/02/2024",
      },
    ],
  },
  {
    number: "0004",
    cliente: "Ana",
    ultimoStatus: "em-rota",
    historico: [
      {
        status: "pedido-feito",
        data: "02/02/2024",
      },
      {
        status: "em-rota",
        data: "03/02/2024",
      },
    ],
  },
  {
    number: "0007",
    cliente: "Pedro",
    ultimoStatus: "pedido-feito",
    historico: [
      {
        status: "pedido-feito",
        data: "02/02/2024",
      },
    ],
  },
  {
    number: "0008",
    cliente: "Paula",
    ultimoStatus: "pedido-feito",
    historico: [
      {
        status: "pedido-feito",
        data: "02/02/2024",
      },
    ],
  },
];

export { todasEncomendas };
