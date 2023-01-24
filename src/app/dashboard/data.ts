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
  if(!positiveValue || positiveValue < 999){
    return String(value)
  }

  if(positiveValue > 999 && positiveValue < 999999){
    return (value/1000).toFixed(2) + ' K'
  }else if(positiveValue > 999999 && positiveValue < 999999999){
    return (value/1000000).toFixed(2) + ' M'
  }else{
    return (value/1000000000).toFixed(2) + ' B'
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

export const crops = [
  {
    description: 'crop 1',
    id: 1,
  },
  {
    description: 'crop 2',
    id: 2,
  },
  {
    description: 'crop 3',
    id: 3,
  },
]

export const cultures = [
  {
    description: 'culture 1',
    id: 1,
  },
  {
    description: 'culture 2',
    id: 2,
  },
  {
    description: 'culture 3',
    id: 3,
  },
]

export const ruralPropertys = [
  {
    description: 'ruralProperty 1',
    id: 1,
  },
  {
    description: 'ruralProperty 2',
    id: 2,
  },
  {
    description: 'ruralProperty 3',
    id: 3,
  },
]

export const filter = (params) =>{
  
  if(params.culture[0] === 1 || params.crop === 1 || params.ruralProperty[0] ===1){
    return  [
      {
        pendingKg: 200811137.78,
        pendingBags: 3124612.8,
        harvestKg: 130128722.75,
        harvestBags: 2231815,
        harvestLoadCount: 1021,
        harvestLoadAvgBags: 115,
        outputKg: -117587793,
        outputBags: -1128116,
        outputLoadCount: 2050,
        outputLoadAvgBags: -516.1,
        inputKg: 15530810,
        inputBags: 123121.1,
        inputLoadCount: 123,
        inputLoadAvgBags: 881.1,
        returnKg: 0,
        warehouseBalance: 23130810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 2346852.3,
        harvestKg: 130128722.75,
        harvestBags: 1168812,
        harvestLoadCount: 3137,
        harvestLoadAvgBags: 314.9,
        outputKg: -117587793,
        outputBags: -2959796.6,
        outputLoadCount: 4650,
        outputLoadAvgBags: -1039.5,
        inputKg: 15530810,
        inputBags: 158846.8,
        inputLoadCount: 335,
        inputLoadAvgBags: 172.7,
        returnKg: 0,
        warehouseBalance: 15530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 5346852.3,
        harvestKg: 130128722.75,
        harvestBags: 6168812,
        harvestLoadCount: 9137,
        harvestLoadAvgBags: 5014.9,
        outputKg: -117587793,
        outputBags: -8959796.6,
        outputLoadCount: 7650,
        outputLoadAvgBags: -1939.5,
        inputKg: 15530810,
        inputBags: 858846.8,
        inputLoadCount: 1335,
        inputLoadAvgBags: 1772.7,
        returnKg: 0,
        warehouseBalance: 25530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 5346852.3,
        harvestKg: 130128722.75,
        harvestBags: 5168812,
        harvestLoadCount: 5137,
        harvestLoadAvgBags: 5014.9,
        outputKg: -117587793,
        outputBags: -5959796.6,
        outputLoadCount: 5650,
        outputLoadAvgBags: -539.5,
        inputKg: 15530810,
        inputBags: 558846.8,
        inputLoadCount: 535,
        inputLoadAvgBags: 572.7,
        returnKg: 0,
        warehouseBalance: 5530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 3346852.3,
        harvestKg: 130128722.75,
        harvestBags: 2168812,
        harvestLoadCount: 2137,
        harvestLoadAvgBags: 1014.9,
        outputKg: -117587793,
        outputBags: -1959796.6,
        outputLoadCount: 2650,
        outputLoadAvgBags: -739.5,
        inputKg: 15530810,
        inputBags: 258846.8,
        inputLoadCount: 335,
        inputLoadAvgBags: 772.7,
        returnKg: 0,
        warehouseBalance: 15530810,
      },
    ];
  }else if(params.culture[0] === 2 || params.crop === 2 || params.ruralProperty[0] ===2){
    return  [
      {
        pendingKg: 200811.78,
        pendingBags: 31246.8,
        harvestKg: 130128.75,
        harvestBags: 22318,
        harvestLoadCount: 21,
        harvestLoadAvgBags: 21,
        outputKg: -117587,
        outputBags: -1128116,
        outputLoadCount: 20,
        outputLoadAvgBags: -51,
        inputKg: 155309,
        inputBags: 12312.1,
        inputLoadCount: 123,
        inputLoadAvgBags: 881.1,
        returnKg: 0,
        warehouseBalance: 23130,
      },
      {
        pendingKg: 333333.78,
        pendingBags: 11111.8,
        harvestKg: 222212.75,
        harvestBags: 44144,
        harvestLoadCount: 33,
        harvestLoadAvgBags: 23,
        outputKg: -88818,
        outputBags: -55,
        outputLoadCount: 12,
        outputLoadAvgBags: -11,
        inputKg: 255309,
        inputBags: 22312.1,
        inputLoadCount: 83,
        inputLoadAvgBags: 681.1,
        returnKg: 1231,
        warehouseBalance: 43130,
      },
      {
        pendingKg: 333333.78,
        pendingBags: 11111.8,
        harvestKg: 222212.75,
        harvestBags: 44144,
        harvestLoadCount: 33,
        harvestLoadAvgBags: 23,
        outputKg: -88818,
        outputBags: -55,
        outputLoadCount: 12,
        outputLoadAvgBags: -11,
        inputKg: 255309,
        inputBags: 22312.1,
        inputLoadCount: 83,
        inputLoadAvgBags: 681.1,
        returnKg: 1231,
        warehouseBalance: 43130,
      },
      {
        pendingKg: 233333.78,
        pendingBags: 21111.8,
        harvestKg: 122212.75,
        harvestBags: 34144,
        harvestLoadCount: 23,
        harvestLoadAvgBags: 13,
        outputKg: -78818,
        outputBags: -35,
        outputLoadCount: 22,
        outputLoadAvgBags: -31,
        inputKg: 155309,
        inputBags: 32312.1,
        inputLoadCount: 43,
        inputLoadAvgBags: 281.1,
        returnKg: 231,
        warehouseBalance: 23130,
      },
      {
        pendingKg: 433333.78,
        pendingBags: 41111.8,
        harvestKg: 422212.75,
        harvestBags: 54144,
        harvestLoadCount: 63,
        harvestLoadAvgBags: 43,
        outputKg: -128818,
        outputBags: -105,
        outputLoadCount: 72,
        outputLoadAvgBags: -51,
        inputKg: 255309,
        inputBags: 52312.1,
        inputLoadCount: 93,
        inputLoadAvgBags: 581.1,
        returnKg: 31,
        warehouseBalance: 53130,
      },
    ];
  }else{
    return  [
      {
        pendingKg: 200811137.78,
        pendingBags: 3124612.8,
        harvestKg: 130128722.75,
        harvestBags: 2231815,
        harvestLoadCount: 1021,
        harvestLoadAvgBags: 115,
        outputKg: -117587793,
        outputBags: -1128116,
        outputLoadCount: 2050,
        outputLoadAvgBags: -516.1,
        inputKg: 15530810,
        inputBags: 123121.1,
        inputLoadCount: 123,
        inputLoadAvgBags: 881.1,
        returnKg: 0,
        warehouseBalance: 23130810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 2346852.3,
        harvestKg: 130128722.75,
        harvestBags: 1168812,
        harvestLoadCount: 3137,
        harvestLoadAvgBags: 314.9,
        outputKg: -117587793,
        outputBags: -2959796.6,
        outputLoadCount: 4650,
        outputLoadAvgBags: -1039.5,
        inputKg: 15530810,
        inputBags: 158846.8,
        inputLoadCount: 335,
        inputLoadAvgBags: 172.7,
        returnKg: 0,
        warehouseBalance: 15530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 5346852.3,
        harvestKg: 130128722.75,
        harvestBags: 6168812,
        harvestLoadCount: 9137,
        harvestLoadAvgBags: 5014.9,
        outputKg: -117587793,
        outputBags: -8959796.6,
        outputLoadCount: 7650,
        outputLoadAvgBags: -1939.5,
        inputKg: 15530810,
        inputBags: 858846.8,
        inputLoadCount: 1335,
        inputLoadAvgBags: 1772.7,
        returnKg: 0,
        warehouseBalance: 25530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 5346852.3,
        harvestKg: 130128722.75,
        harvestBags: 5168812,
        harvestLoadCount: 5137,
        harvestLoadAvgBags: 5014.9,
        outputKg: -117587793,
        outputBags: -5959796.6,
        outputLoadCount: 5650,
        outputLoadAvgBags: -539.5,
        inputKg: 15530810,
        inputBags: 558846.8,
        inputLoadCount: 535,
        inputLoadAvgBags: 572.7,
        returnKg: 0,
        warehouseBalance: 5530810,
      },
      {
        pendingKg: 200811137.78,
        pendingBags: 3346852.3,
        harvestKg: 130128722.75,
        harvestBags: 2168812,
        harvestLoadCount: 2137,
        harvestLoadAvgBags: 1014.9,
        outputKg: -117587793,
        outputBags: -1959796.6,
        outputLoadCount: 2650,
        outputLoadAvgBags: -739.5,
        inputKg: 15530810,
        inputBags: 258846.8,
        inputLoadCount: 335,
        inputLoadAvgBags: 772.7,
        returnKg: 0,
        warehouseBalance: 15530810,
      },
    ];
  }
  

}

