import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText
            variants={fadeInUp}
            delay={1}
            variant="accent"
            fontWeight="light"
          >
            Ohh you found me?. Hey there! I&apos;m
          </MotionText>
          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Anzalna
          </MotionHeading>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ansari.
          </MotionHeading>
          <MotionText
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            Most people simply call me Anzalna! . . .
          </MotionText>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Full-Stack Developer | WordPress Specialist
          </MotionHeading>
          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            UI UX Designer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            Hey! How nice of you to look at my personal site,
            <Text variant="emphasis" as="span">
              {' '}
              Thank you!
            </Text>
            <br />I specialize in MERN Stack development, WordPress
            customization, and UI/UX design, creating fast, responsive, and
            user-friendly web experiences.
          </MotionText>

          {/* Buttons Stack */}
          <MotionStack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            variants={simpleOpacity}
          >
            <MotionButton
              size="lg"
              variant="outline"
              borderWidth="1px"
              borderRadius="0"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              variants={simpleOpacity}
              as={'a'}
              href="mailto:anzalnaansari55@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get in touch!
            </MotionButton>

            <MotionButton
              as={'a'}
              href={'/Anzalna_Ansari_CV.pdf'}
              download={'Anzalna_Ansari_CV.pdf'}
              size="lg"
              variant="solid"
              borderRadius="0"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              colorScheme="teal"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Hire Me!
            </MotionButton>
          </MotionStack>

          <MotionBox d="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
