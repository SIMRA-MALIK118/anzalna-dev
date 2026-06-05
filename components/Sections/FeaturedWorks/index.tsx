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

// @ts-ignore
const MotionGrid = motion(Grid)
// @ts-ignore
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading size="2xl" style={{ fontVariantCaps: 'small-caps' }}>
        Some of my works.
      </Heading>
      <Text variant="description">
        A collection of WordPress sites, full-stack web applications, and mobile
        apps built for real clients across different industries.
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
            title="Citadel"
            src="/works/citadel.png"
            description="WordPress — Premium enterprise-level website for a leading financial services company with sophisticated design and secure architecture."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.citadel.com/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Ganj Bakhsh"
            src="/works/ganjbakhsh.png"
            description="WordPress — Eco-friendly packaging manufacturer website with product catalog, company profile, and custom theme development."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ganjbakhsh.com/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Posh Pop Bakeshop"
            src="/works/poshpop.png"
            description="WordPress — E-commerce store for a gluten-free bakery with WooCommerce product collections, custom theme, and nationwide US shipping."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.poshpopbakeshop.com/collections"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="UltraTech"
            src="/works/ultratech.png"
            description="WordPress — Corporate website for a Pakistani networking equipment distributor. Authorized distributor for Uniview, Grandstream, and Hikvision products."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ultratech.pk/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="Vapes Market"
            src="/works/vapesmarket.png"
            description="WordPress — UK-based e-commerce store for vaping products. Full product range of e-liquids, disposable vapes, and kits with free delivery over £30."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://vapesmarket.co.uk/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="Mustakshif"
            src="/works/mustakshif.png"
            description="Web App — Halal product verification platform with barcode scanning, restaurant finder, and prayer time tools for Muslim lifestyle compliance."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.mustakshif.com/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={7}
            title="IB Ripple"
            src="/works/ibripple.png"
            description="Web App — Peer-reviewed academic research journal and conference platform for International Baccalaureate students to publish original research globally."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.ibripple.com/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={8}
            title="Nullify.ai"
            src="/works/nullify.png"
            description="Web App — AI-powered cybersecurity SaaS platform that autonomously discovers, investigates, and fixes software vulnerabilities with merge-ready code."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.nullify.ai/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={9}
            title="LA International"
            src="/works/lainternational.png"
            description="Web App — Official website for Learning Alliance International, an IB World School in Lahore offering PYP, MYP and Diploma programmes for ages 5–19."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.lainternational.edu.pk/"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={10}
            title="Bano Live"
            src="/works/bano-live.png"
            description="Mobile App — Live streaming application for real-time content broadcasting. Allows users to go live, interact with viewers, and share moments instantly."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://play.google.com/store/apps/details?id=com.bano.live&hl=en&pli=1"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={11}
            title="GoZippRide"
            src="/works/gozippride.png"
            description="Mobile App — On-demand ride-sharing and transportation app connecting riders with drivers. Set your price, find your ride for fast and affordable commuting."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://play.google.com/store/apps/details?id=com.fabindrive"
            objectPosition="top"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
