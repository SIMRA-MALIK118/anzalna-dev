import { memo } from 'react'
import { SiNodeDotJs } from 'react-icons/si'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiWordpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFramer,
  SiNpm,
  SiFigma,
  SiAdobexd,
} from 'react-icons/si'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2023

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for {professionalYears} years now and
        currently working as a <b>Mern Stack Developer</b> that specializes in{' '}
        <Tooltip
          aria-label="UI/UX Design"
          hasArrow
        >
          <Text as="span" variant="emphasis" color={emphasis}>
            <b>UI/UX Design</b>
          </Text>
        </Tooltip>{' '}
        ,{' '}
        <Text as="span" variant="emphasis" color={emphasis}>
          <b>WordPress</b>
        </Text>
        , and{' '}
        <Text as="span" variant="emphasis" color={emphasis}>
          <b>MERN Stack</b>
        </Text>
        , delivering complete digital solutions!
        <br /> <br />
        Here are my primary technologies and tools:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiWordpress} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              WordPress Development
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              Elementor Pro
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNpm} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              React.js
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNpm} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              Next.js
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiFigma} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              Figma - UI/UX
            </Text>
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              JavaScript
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              TypeScript
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
  <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
  <Text color={emphasis} fontWeight="bold">
    Node.js
  </Text>
</ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiFramer} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              Express.js
            </Text>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAdobexd} color={emphasis} fontSize="2em" />
            <Text color={emphasis} fontWeight="bold">
              Adobe XD
            </Text>
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
            color={emphasis}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
