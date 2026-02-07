import { Box, Text, LinkBox, LinkOverlay, Badge, HStack, useColorModeValue } from '@chakra-ui/react'
import { FaStar, FaCodeBranch } from 'react-icons/fa'

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
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')

  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as="a"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        cursor="pointer"
      >
        <Box
          p={4}
          borderRadius="12px"
          borderWidth="1px"
          borderColor={borderColor}
          bg={bgColor}
          _hover={{ borderColor: 'teal.300' }}
          transition="border-color 0.2s"
          minH="140px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <LinkOverlay href={repo.html_url} target="_blank">
              <Text mt={2} fontSize={18} fontWeight="bold" noOfLines={1}>
                {repo.name}
              </Text>
            </LinkOverlay>
            <Text fontSize={13} mt={2} noOfLines={2} opacity={0.8}>
              {repo.description}
            </Text>
          </Box>

          <HStack mt={3} spacing={3} justify="center" flexWrap="wrap">
            {repo.language && (
              <Badge
                fontSize="0.7em"
                colorScheme="teal"
                variant="subtle"
                display="flex"
                alignItems="center"
                gap={1}
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
              <Badge fontSize="0.7em" variant="subtle" display="flex" alignItems="center" gap={1}>
                <FaStar size={10} /> {repo.stargazers_count}
              </Badge>
            )}
            {repo.forks_count > 0 && (
              <Badge fontSize="0.7em" variant="subtle" display="flex" alignItems="center" gap={1}>
                <FaCodeBranch size={10} /> {repo.forks_count}
              </Badge>
            )}
          </HStack>
        </Box>
      </LinkBox>
    </Box>
  )
}
