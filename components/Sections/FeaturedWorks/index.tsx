import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out my portfolio featuring web applications, WordPress projects,
        and UI/UX case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="E-Commerce Website"
            src="/works/ecommerce.webp"
            description="A modern e-commerce platform built with MERN stack. Features include user authentication, product catalog, shopping cart, and payment integration."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://your-ecommerce-demo.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="WordPress Business Site"
            description="Custom WordPress website with Elementor Pro for a corporate client. Features custom theme development and responsive design."
            src="/works/wordpress-project.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://your-wordpress-project.com"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="UI/UX Dashboard Design"
            description="Modern admin dashboard UI/UX design created with Figma. Features clean interface, user-friendly navigation, and responsive layout."
            src="/works/ui-ux-dashboard.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://your-figma-prototype.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Portfolio Website"
            description="Responsive portfolio website built with Next.js and Chakra UI. Features modern design, smooth animations, and optimized performance."
            src="/works/portfolio.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://your-portfolio.com"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
