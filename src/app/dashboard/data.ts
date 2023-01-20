export const dolar = [
  {
    name: 'Dólar',
    data: [
      {
        y: 5.1396,
        x: '2023-01-15',
      },
      {
        y: 5.6396,
        x: '2023-01-16',
      },
      {
        y: 5.2696,
        x: '2023-01-17',
      },
      {
        y: 5.4396,
        x: '2023-01-18',
      },
      {
        y: 5.2396,
        x: '2023-01-19',
      },
    ],
  },
];

export const balance = [
  {
    name: 'Saldo',
    data: [
      {
        y: 90000,
        x: '2023-01-15',
      },
      {
        y: 90000,
        x: '2023-01-16',
      },
      {
        y: 112497.11,
        x: '2023-01-17',
      },
      {
        y: 89715.32,
        x: '2023-01-18',
      },
      {
        y: 70239.91,
        x: '2023-01-19',
      },
    ],
  },
];

export const round = (value: number) =>{
  const positiveValue = Math.abs(value)

  if(!positiveValue){
    return '0'
  }

  if(positiveValue > 999 && positiveValue < 999999){
    return Math.floor(value/1000) + ' K'
  }else if(positiveValue > 999999 && positiveValue < 999999999){
    return Math.floor(value/1000000) + ' M'
  }else{
    return Math.floor(value/1000000000) + ' B'
  }
}

export const financialBalance = [
  {
    bankBalance: 70239.91,
    receiveBalance: 889417599.35,
    payBalance: -375397453.11,
    profitValue: 35733576.79,
    profitPercentage: 42.9,
    dolarDate: '2022-12-06',
    dolarValue: 5.2396
  }
]

export const financial = [
  {
    name: 'Financeiro',
    data: [
      {
        y: 70239.91,
        x: 'Saldo',
      },
      {
        y: 889417599.35,
        x: 'A Receber',
      },
      {
        y: -375397453.11,
        x: 'A Pagar',
      },
      {
        y: 35733576.79,
        x: 'Lucro',
      },
    ],
  },
];