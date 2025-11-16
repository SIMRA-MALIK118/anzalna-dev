import { IconType } from 'react-icons'
import {
  FaLinkedin,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anzalna-ansari-6990b7329',
    icon: FaLinkedin,
  },
]
