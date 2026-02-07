import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  HStack,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa'

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516'
}

export const GitHubRepoItem = ({ repo }) => {
  const bgColor = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const hoverBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.300')

  const updatedDate = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    : null

  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Box
          p={5}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={borderColor}
          bg={bgColor}
          _hover={{
            borderColor: 'teal.300',
            bg: hoverBg,
            boxShadow: '0 4px 12px rgba(136, 204, 202, 0.15)'
          }}
          transition="all 0.2s ease"
          minH="160px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <LinkOverlay
              as={NextLink}
              href={`/works/repo/${repo.name}`}
              scroll={false}
            >
              <Text
                mt={1}
                fontSize={17}
                fontWeight="bold"
                noOfLines={1}
                letterSpacing="tight"
              >
                {repo.name}
              </Text>
            </LinkOverlay>
            <Text fontSize={13} mt={2} noOfLines={2} opacity={0.7}>
              {repo.description}
            </Text>
          </Box>

          <Box mt={4}>
            <HStack spacing={2} justify="center" flexWrap="wrap">
              {repo.language && (
                <Badge
                  fontSize="0.7em"
                  colorScheme="teal"
                  variant="subtle"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={0.5}
                  borderRadius="full"
                >
                  <Box
                    as="span"
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={languageColors[repo.language] || '#ccc'}
                    display="inline-block"
                  />
                  {repo.language}
                </Badge>
              )}
              {repo.stargazers_count > 0 && (
                <Badge
                  fontSize="0.7em"
                  variant="subtle"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={0.5}
                  borderRadius="full"
                >
                  <Icon as={FaStar} boxSize="10px" color="yellow.400" />{' '}
                  {repo.stargazers_count}
                </Badge>
              )}
              {repo.forks_count > 0 && (
                <Badge
                  fontSize="0.7em"
                  variant="subtle"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={0.5}
                  borderRadius="full"
                >
                  <Icon as={FaCodeBranch} boxSize="10px" />{' '}
                  {repo.forks_count}
                </Badge>
              )}
              {updatedDate && (
                <Badge
                  fontSize="0.65em"
                  variant="subtle"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={0.5}
                  borderRadius="full"
                  opacity={0.7}
                >
                  <Icon as={FaCalendarAlt} boxSize="9px" /> {updatedDate}
                </Badge>
              )}
            </HStack>
          </Box>
        </Box>
      </LinkBox>
    </Box>
  )
}
