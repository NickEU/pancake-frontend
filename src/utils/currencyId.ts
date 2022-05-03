import { Currency, Token } from '@pancakeswap/sdk'
import { ETHER } from 'config/constants/networks'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'FTM'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
