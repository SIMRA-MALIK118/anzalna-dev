import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode: '/profile.png',
  LightMode: './profile_light.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  const borderColor = useColorModeValue('blue.400', 'blue.300')
  const boxShadow = useColorModeValue(
    '0 0 20px rgba(66, 153, 225, 0.5)',
    '0 0 20px rgba(100, 150, 255, 0.6)'
  )
  
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="Anzalna Ansari Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          borderRadius="full"
          border="4px solid"
          borderColor={borderColor}
          boxShadow={boxShadow}
          objectFit="cover"
          filter="brightness(1.05) contrast(1.1)"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
        <Text textAlign="center" fontSize="smaller" variant="description" marginTop="10px" >
          Art by{' '}
          <Link
            href="https://www.linkedin.com/in/anzalna-ansari-6990b7329"
            target="_blank"
            aria-label="Anzalna Ansari"
            rel="noreferrer"
          >
            Anzalna Ansari
          </Link>
        </Text>
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar