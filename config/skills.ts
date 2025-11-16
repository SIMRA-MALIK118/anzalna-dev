import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiNextDotJs,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiWordpress,
  SiElementor,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiVisualstudiocode,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  frontend: [
    {
      name: 'React.js',
      icon: SiReact,
    },
    {
      name: 'Next.js',
      icon: SiNextDotJs,
    },
    {
      name: 'JavaScript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: SiNodeDotJs,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
  ],
  database: [
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
  ],
  'ui frameworks': [
    {
      name: 'WordPress Development',
      icon: SiWordpress,
    },
    {
      name: 'Elementor Pro',
      icon: SiElementor,
    },
    {
      name: 'Figma - UI/UX',
      icon: SiFigma,
    },
    {
      name: 'Adobe XD',
      icon: SiAdobexd,
    },
    {
      name: 'Photoshop',
      icon: SiAdobephotoshop,
    },
    {
      name: 'Illustrator',
      icon: SiAdobeillustrator,
    },
  ],
  'productivity boost': [
    {
      name: 'VS Code',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}