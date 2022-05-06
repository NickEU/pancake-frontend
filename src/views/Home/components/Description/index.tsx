import { Heading, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      <Heading textAlign="center" scale="xl">
        {t('Automated market makers for the win!')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Yield mining for the win!')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget quam eu lacus egestas feugiat. Ut sagittis posuere consequat. Pellentesque ut imperdiet augue, id placerat augue. Praesent auctor malesuada nisi sed ullamcorper. Vivamus consectetur mi ligula, vel sodales mi aliquam at. Phasellus commodo mollis lorem non pharetra. Quisque lacinia leo a massa tristique, in consequat ex vehicula. Maecenas leo quam, lobortis vitae mauris quis, consequat rutrum turpis. Morbi vel massa diam. Integer mi elit, pellentesque ut enim et, pellentesque suscipit eros. Vivamus scelerisque ligula sagittis sem fringilla, in mollis quam tempus. Morbi finibus lobortis nisi nec scelerisque.',
        )}
      </Text>
      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t(
          'Vestibulum vulputate, augue sit amet scelerisque sodales, risus orci accumsan enim, sit amet tempor ipsum mauris ut turpis. Nullam rhoncus neque dui, id tempus odio fringilla eu. In nec sapien a neque posuere pretium. Vivamus ligula augue, rhoncus in sapien eu, faucibus cursus risus. Nullam quis tellus lectus. Phasellus convallis aliquet sapien. Vestibulum sed convallis neque, eget commodo odio. Duis lacinia volutpat quam et varius. Quisque hendrerit nec ante in convallis. Praesent efficitur porta neque, eget lacinia neque efficitur vel. Fusce mollis nisl sit amet ex feugiat tincidunt.',
        )}
      </Text>
    </Flex>
  )
}

export default Stats
