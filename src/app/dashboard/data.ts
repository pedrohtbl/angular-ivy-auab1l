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