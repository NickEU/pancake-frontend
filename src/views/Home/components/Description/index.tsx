import { Heading, Flex, Text, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Stats = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl">
        {t('Automated market makers for the win!')}
      </Heading>
      <Image
        mx="auto"
        mt="12px"
        src="https://miro.medium.com/max/571/1*gJaDivGlHI_OOGgV77AOZg.jpeg"
        alt="Ridiculous Finance"
        width={571}
        height={432}
      />
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('RIDICULOUS FINANCE')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('Decentralized cryptocurrency exchange platform.')}
      </Text>
    </Flex>
  )
}

export default Stats
