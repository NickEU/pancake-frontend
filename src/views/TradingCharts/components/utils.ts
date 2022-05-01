export const candleTimePeriodToChartRefreshRate = (timePeriod: string) => {
  switch (timePeriod) {
    case '1': // one minute candle, 60 sec chart refresh rate
      return 5 * 1000
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
