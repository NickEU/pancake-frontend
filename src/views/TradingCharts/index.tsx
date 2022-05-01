import { Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import Page from '../Page'
import TradingChart from './components/TradingChart'

export default function TradingCharts() {
  const router = useRouter()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { account } = useActiveWeb3React()

  return (
    <Page>
      <Flex width="100%" justifyContent="center" position="relative">
        <Flex flexDirection="column">
          <TradingChart />
        </Flex>
      </Flex>
    </Page>
  )
}
