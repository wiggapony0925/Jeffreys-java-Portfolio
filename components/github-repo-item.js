import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  HStack,
  Icon
} from '@chakra-ui/react'
import { FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa'
import { LANGUAGE_COLORS } from '../lib/constants'

export const GitHubRepoItem = ({ repo }) => {
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
          p={{ base: 3, md: 5 }}
          borderRadius="xl"
          borderWidth="1px"
          borderColor="border.card"
          bg="bg.card"
          _hover={{
            borderColor: 'teal.300',
            bg: 'bg.card.hover',
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
                fontSize={{ base: 15, md: 17 }}
                fontWeight="bold"
                noOfLines={1}
                letterSpacing="tight"
                wordBreak="break-word"
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
                    bg={LANGUAGE_COLORS[repo.language] || '#ccc'}
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
