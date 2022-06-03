export const candleTimePeriodToChartRefreshRate = (timePeriod: number) => {
  switch (timePeriod) {
    case 1: // one minute candle, 60 sec chart refresh rate
      return 60 * 1000
    case 2:
      return 300 * 1000
    case 3:
      return 600 * 1000
    default:
      return 5 * 1000
  }
}

export const convertButtonIndexToTokenCode = (btnIndex: number) => {
  switch (btnIndex) {
    case 0:
      return 'btcusd'
    case 1:
      return 'ethusd'
    case 2:
      return 'ftmusd'
    default:
      return 'btcusd'
  }
}

export const convertButtonIndexToChartSize = (btnIndex: number) => {
  switch (btnIndex) {
    case 0:
      return 100
    case 1:
      return 200
    case 2:
      return 300
    default:
      return 100
  }
}
