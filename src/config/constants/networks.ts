import { Token, ETHER, WETH } from '@pancakeswap/sdk'

export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID

export enum ChainId {
  MAINNET = 4002,
  TESTNET = 97,
}

WETH[4002] = new Token(
  4002,
  '0xf1277d1Ed8AD466beddF92ef448A132661956621',
  18,
  'WFTM',
  'WFTM',
  'https://fantom.foundation/defi/',
)
ETHER.name = 'FTM'
ETHER.symbol = 'FTM'

export { WETH, ETHER }
