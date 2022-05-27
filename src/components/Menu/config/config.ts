import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  menuStatus,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Home'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Exchange'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Liquidity'),
    href: '/liquidity',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [],
  },
  {
    label: t('Farms(WIP)'),
    href: '#',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [],
  },
  {
    label: t('Trading charts'),
    href: '/trading-charts',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [],
  },
  {
    label: t('Portfolio'),
    href: '/portfolio',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [],
  },
]

export default config
