import { Token, ETHER, WETH } from '@pancakeswap/sdk'

export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID

const chainId: number = +process.env.NEXT_PUBLIC_CHAIN_ID
const decimals = 18

export enum ChainId {
  MAINNET = chainId,
  TESTNET = 97,
}

WETH[chainId] = new Token(
  chainId,
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_ETHER,
  decimals,
  process.env.NEXT_PUBLIC_ETHER_SYMBOL,
  process.env.NEXT_PUBLIC_ETHER_NAME,
  process.env.NEXT_PUBLIC_ETHER_URL,
)
ETHER.name = process.env.NEXT_PUBLIC_ETHER_NAME
ETHER.symbol = process.env.NEXT_PUBLIC_ETHER_SYMBOL

export { WETH, ETHER }
