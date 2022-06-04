import { Text, Heading, ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useEffect, useState } from 'react'
import QuestionHelper from 'components/QuestionHelper'
import PriceChart from './PriceChart'
import useGoogleCharts from '../useGoogleCharts'
import VolumeChart from './VolumeChart'
import {
  candleTimePeriodToChartRefreshRate,
  convertButtonIndexToTokenCode,
  convertButtonIndexToChartSize,
} from './utils'

const TradingChart = ({ isMobile = false }) => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [freshTokenCandleData, setfreshTokenCandleData] = useState([])
  const [selectedToken, setSelectedToken] = useState(0)
  const [chartSize, setChartSize] = useState(0)
  const [chartScale, setChartScale] = useState(0)
  const google = useGoogleCharts()
  const { t } = useTranslation()
  const numRecords = convertButtonIndexToChartSize(chartSize)
  const tokenCode = convertButtonIndexToTokenCode(selectedToken)
  useEffect(() => {
    const statType = chartScale + 1
    async function fetchData() {
      const fetchRecordsFromApi = async () => {
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ tokenCode, candleTimePeriod: statType.toString(), numRecords }),
        }
        const marketDataServiceUrl = process.env.NEXT_PUBLIC_MARKET_DATA_SERVICE_ADDRESS
        const response = await fetch(marketDataServiceUrl, requestOptions)
        const historicalData = await response.json()
        return historicalData
      }
      const fetchResult = await fetchRecordsFromApi()
      if (fetchResult.err === undefined) {
        setfreshTokenCandleData(fetchResult)
        setDataLoaded(true)
      }
    }

    if (!dataLoaded) {
      fetchData()
    }

    const intervalId = setInterval(() => {
      fetchData()
    }, candleTimePeriodToChartRefreshRate(statType)) // in milliseconds
    return () => clearInterval(intervalId)
  }, [selectedToken, chartSize, chartScale])

  const badComparator = (a: any[], b: any[]) => (a[0] > b[0] ? 1 : a[0] === b[0] ? 0 : -1)
  if (freshTokenCandleData.length !== undefined) {
    const priceData = freshTokenCandleData
      .map((a) => [new Date(a.time), +a.low, +a.open, +a.close, +a.high])
      .sort(badComparator)
    const volumeData = freshTokenCandleData.map((a) => [new Date(a.time), +a.volume]).sort(badComparator)
    return (
      <>
        {dataLoaded ? (
          <div>
            <Heading textAlign="center" scale="xl" mb="32px">
              {t('Price and Trading Volume Chart for ') + tokenCode}
            </Heading>
            <Flex justifyContent="center" alignItems="center" mb="24px">
              <Text ml="12px" mr="12px">
                {t('Token:')}
              </Text>
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
              <Text ml="12px" mr="12px">
                {t('Chart Size:')}
              </Text>
              <ButtonMenu
                activeIndex={chartSize}
                scale="sm"
                variant="subtle"
                onItemClick={(index) => {
                  setChartSize(index)
                  setDataLoaded(false)
                }}
              >
                <ButtonMenuItem as="button">{100}</ButtonMenuItem>
                <ButtonMenuItem as="button">{200}</ButtonMenuItem>
                <ButtonMenuItem as="button">{300}</ButtonMenuItem>
              </ButtonMenu>
              <Text ml="12px" mr="12px">
                {t('Scale:')}
              </Text>
              <ButtonMenu
                activeIndex={chartScale}
                scale="sm"
                variant="subtle"
                onItemClick={(index) => {
                  setChartScale(index)
                  setDataLoaded(false)
                }}
              >
                <ButtonMenuItem as="button">{t('1 min')}</ButtonMenuItem>
                <ButtonMenuItem as="button">{t('1 hour')}</ButtonMenuItem>
                <ButtonMenuItem as="button">{t('1 day')}</ButtonMenuItem>
              </ButtonMenu>
              <QuestionHelper
                text={t(
                  'Price chart tooltips show Low-High Open-Close prices. The trading data is taken from Gemini exchange.',
                )}
                ml="4px"
              />
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

  setDataLoaded(false)
  return (
    <>
      <Text>{t('Failed to load charts, please try again later...')}</Text>
    </>
  )
}

export default TradingChart
