import { memo } from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'
import AchievementsTab from './AchievementsTab'

const Achievements = () => (
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
      My Achievements.
    </Heading>
    <Text variant="description">
      Here are some of my notable achievements, certifications, and accomplishments 
      in my web development journey.
    </Text>
    
    <AchievementsTab />
  </Stack>
)

export default memo(Achievements)