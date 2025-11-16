import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiTrophy } from 'react-icons/bi'

const AchievementsTab = () => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  
  const achievements = [
    "Completed 50+ successful projects on Upwork and Fiverr",
    "Maintained 100% client satisfaction rate",
    "Built responsive websites for international clients",
    "Specialized in MERN Stack and WordPress development",
    "Created user-friendly UI/UX designs for various applications"
  ]

  return (
    <Box>
      <List spacing={4}>
        {achievements.map((achievement, index) => (
          <ListItem
            key={index}
            fontSize="small"
            display="flex"
            alignItems="center"
          >
            <ListIcon as={BiTrophy} color={emphasis} fontSize="1.5em" />
            <Text>{achievement}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default AchievementsTab