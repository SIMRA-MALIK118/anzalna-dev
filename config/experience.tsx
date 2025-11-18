import { Link } from '@chakra-ui/react'

export type Company = 'Nexora' | 'Upwork' | 'GAOTek'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Nexora: {
    name: 'Nexora',
    longName: 'Nexora Company',
    subDetail: 'Software Development Company',
    url: 'https://nexora-agency.vercel.app/',
    position: 'UI/UX Designer',
    duration: '2025',
    logo: {
      light: '/worked_at_logos/nexora/nexora_logo_light.png',
      dark: '/worked_at_logos/nexora/nexora_logo_dark.png',
    },
    roles: [
      <>
        Working as UI/UX Designer, creating user-centered designs for web
        applications.
      </>,
      <>
        Designing responsive and intuitive user interfaces using Figma and Adobe
        XD.
      </>,
      <>
        Collaborating with development teams to implement designs and ensure
        user experience quality.
      </>,
    ],
  },
  Upwork: {
    name: 'Upwork',
    longName: 'Upwork Freelance Platform',
    subDetail: 'Freelance Developer & Designer',
    url: 'https://upwork.com',
    position: 'Full Stack Developer & UI/UX Designer',
    duration: '2025',
    logo: {
      light: '/worked_at_logos/upwork/upwork_logo_light.png',
      dark: '/worked_at_logos/upwork/upwork_logo_dark.png',
    },
    roles: [
      <>
        Working as Full Stack Developer and UI/UX Designer for various
        international clients.
      </>,
      <>
        Providing WordPress development, MERN stack solutions, and UI/UX design
        services.
      </>,
      <>
        Creating responsive designs and developing complete web solutions from
        concept to deployment.
      </>,
    ],
  },
  GAOTek: {
    name: 'GAO Tek',
    longName: 'GAO Tek Inc',
    subDetail: 'Technology Company',
    url: 'https://gaotek.com',
    position: 'WordPress Developer',
    duration: '2025',
    logo: {
      light: '/worked_at_logos/gaotek/gaotek_logo_light.png',
      dark: '/worked_at_logos/gaotek/gaotek_logo_dark.png',
    },
    roles: [
      <>
        Worked as WordPress Developer, specializing in WordPress website
        development and customization.
      </>,
      <>
        Developed custom WordPress themes and plugins according to client
        requirements.
      </>,
      <>
        Created responsive WordPress websites with optimized performance and
        user experience.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Nexora,
  Experiences.Upwork,
  Experiences.GAOTek,
]
