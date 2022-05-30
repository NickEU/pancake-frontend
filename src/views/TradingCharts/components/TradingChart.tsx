import { Text, Heading, ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useEffect, useState } from 'react'
import PriceChart from './PriceChart'
import useGoogleCharts from '../useGoogleCharts'
import VolumeChart from './VolumeChart'
import { candleTimePeriodToChartRefreshRate, convertButtonIndexToTokenCode } from './utils'

const TradingChart = ({ isMobile = false }) => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [freshTokenCandleData, setfreshTokenCandleData] = useState([])
  const [selectedToken, setSelectedToken] = useState(0)
  const google = useGoogleCharts()
  const { t } = useTranslation()
  const candleTimePeriod = '1'
  const numRecords = 100
  const tokenCode = convertButtonIndexToTokenCode(selectedToken)
  console.log(selectedToken)
  useEffect(() => {
    async function fetchData() {
      const fetchRecordsFromApi = async () => {
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ tokenCode, candleTimePeriod, numRecords }),
        }
        const marketDataServiceUrl = process.env.NEXT_PUBLIC_MARKET_DATA_SERVICE_ADDRESS
        const response = await fetch(marketDataServiceUrl, requestOptions)
        const historicalData = await response.json()
        return historicalData
      }
      const fetchResult = await fetchRecordsFromApi()
      setfreshTokenCandleData(fetchResult)
      setDataLoaded(true)
    }

    if (!dataLoaded) {
      fetchData()
    }

    const intervalId = setInterval(() => {
      fetchData()
    }, candleTimePeriodToChartRefreshRate(candleTimePeriod)) // in milliseconds
    return () => clearInterval(intervalId)
  }, [selectedToken])

  const badComparator = (a: any[], b: any[]) => (a[0] > b[0] ? 1 : a[0] === b[0] ? 0 : -1)
  const priceData = freshTokenCandleData
    .map((a) => [new Date(a.time), +a.low, +a.open, +a.close, +a.high])
    .sort(badComparator)
  const volumeData = freshTokenCandleData.map((a) => [new Date(a.time), +a.volume]).sort(badComparator)
  if (priceData.length) console.log(priceData[priceData.length - 1])

  return (
    <>
      {dataLoaded ? (
        <div>
          <Heading textAlign="center" scale="xl" mb="32px">
            {t('Price and Trading Volume Chart for ') + tokenCode}
          </Heading>
          <Flex justifyContent="center" alignItems="center" mb="24px">
            <ButtonMenu
              activeIndex={selectedToken}
              scale="sm"
              variant="subtle"
              onItemClick={(index) => {
                setSelectedToken(index)
                setDataLoaded(false)
              }}
            >
              <ButtonMenuItem as="button">{t('BTC')}</ButtonMenuItem>
              <ButtonMenuItem as="button">{t('ETH')}</ButtonMenuItem>
              <ButtonMenuItem as="button">{t('FTM')}</ButtonMenuItem>
            </ButtonMenu>
          </Flex>
          <PriceChart google={google} priceData={priceData} />
          <VolumeChart google={google} volumeData={volumeData} />
        </div>
      ) : (
        <Text>{t('Loading charts, please wait...')}</Text>
      )}
    </>
  )
}

export default TradingChart
