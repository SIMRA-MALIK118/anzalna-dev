import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'

const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places I&apos;ve worked.
    </Heading>
    <Text variant="description">
      I started my journey with WordPress development at <b>GAO Tek Inc</b>,
      then expanded my expertise through platforms like <b>Fiverr</b> and{' '}
      <b>Upwork</b>. Currently, I&apos;m working as a{' '}
      <b>MERN Stack Developer</b> at{' '}
      <Link href="https://nexora.com" target="_blank" rel="noreferrer">
        Nexora Company
      </Link>
      , where I specialize in creating modern web applications.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
