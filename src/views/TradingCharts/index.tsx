import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  Heading,
  Button,
  Text,
  ArrowDownIcon,
  Box,
  useModal,
  Flex,
  IconButton,
  BottomDrawer,
  useMatchBreakpoints,
  ArrowUpDownIcon,
  Skeleton,
} from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'

import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import Page from '../Page'

export default function TradingCharts() {
  const router = useRouter()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { account } = useActiveWeb3React()

  return (
    <Page>
      <Flex width="100%" justifyContent="center" position="relative">
        <Flex flexDirection="column">
          <Heading textAlign="center" scale="xl" mb="32px">
            {t('Trading charts coming soon!')}
          </Heading>
          <Text textAlign="center" color="textSubtle">
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget quam eu lacus egestas feugiat. Ut sagittis posuere consequat. Pellentesque ut imperdiet augue, id placerat augue. Praesent auctor malesuada nisi sed ullamcorper. Vivamus consectetur mi ligula, vel sodales mi aliquam at. Phasellus commodo mollis lorem non pharetra. Quisque lacinia leo a massa tristique, in consequat ex vehicula. Maecenas leo quam, lobortis vitae mauris quis, consequat rutrum turpis. Morbi vel massa diam. Integer mi elit, pellentesque ut enim et, pellentesque suscipit eros. Vivamus scelerisque ligula sagittis sem fringilla, in mollis quam tempus. Morbi finibus lobortis nisi nec scelerisque.',
            )}
          </Text>
        </Flex>
      </Flex>
    </Page>
  )
}
