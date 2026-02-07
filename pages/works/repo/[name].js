import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Box,
  HStack,
  Divider,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Title, Meta } from '../../../components/ui/work'
import P from '../../../components/ui/paragraph'
import Layout from '../../../components/layouts/article'

const GITHUB_USERNAME = 'wiggapony0925'

const RepoDetail = () => {
  const router = useRouter()
  const { name } = router.query
  const [repo, setRepo] = useState(null)
  const [readme, setReadme] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!name) return

    // Validate repo name
    if (!/^[a-zA-Z0-9._-]+$/.test(name)) {
      setNotFound(true)
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const { signal } = controller
    let foundRepo = null

    // Try to load repo data from localStorage first
    try {
      const cached = localStorage.getItem('github_repos')
      if (cached) {
        const repos = JSON.parse(cached)
        foundRepo = repos.find(r => r.name === name) || null
      }
    } catch (e) {
      // localStorage might be unavailable
    }

    if (foundRepo) {
      setRepo(foundRepo)
      setLoading(false)
    }

    // Always fetch fresh data from API as well (or as primary if not cached)
    const headers = { Accept: 'application/vnd.github.v3+json' }

    fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(name)}`,
      { headers, signal }
    )
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repository data')
        return res.json()
      })
      .then(data => {
        const repoData = {
          id: data.id,
          name: data.name || name,
          description: data.description || 'No description provided.',
          html_url: data.html_url || '',
          homepage: data.homepage || null,
          language: data.language || null,
          stargazers_count: data.stargazers_count || 0,
          forks_count: data.forks_count || 0,
          updated_at: data.updated_at || null,
          topics: data.topics || []
        }
        setRepo(repoData)
        setLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') return
        // If we already have cached data, keep it; otherwise redirect to GitHub as fallback
        if (!foundRepo) {
          window.location.href = `https://github.com/${GITHUB_USERNAME}/${name}`
          return
        }
        setLoading(false)
      })

    // Fetch README as raw markdown
    fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(name)}/readme`,
      {
        headers: { Accept: 'application/vnd.github.v3.raw' },
        signal
      }
    )
      .then(res => {
        if (!res.ok) return null
        return res.text()
      })
      .then(markdown => {
        if (markdown) {
          setReadme(markdown)
        }
      })
      .catch(err => {
        if (err.name === 'AbortError') return
        // README is optional, fail silently
      })

    return () => controller.abort()
  }, [name])

  if (loading) {
    return (
      <Layout title="Loading...">
        <Container>
          <Center py={20}>
            <Spinner size="xl" color="teal.400" />
          </Center>
        </Container>
      </Layout>
    )
  }

  if (notFound || !repo) {
    return (
      <Layout title="Not Found">
        <Container>
          <Title>Repository Not Found</Title>
          <P>This repository could not be loaded.</P>
        </Container>
      </Layout>
    )
  }

  const updatedDate = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : null

  return (
    <Layout title={repo.name}>
      <Container>
        <Title>
          {repo.name}{' '}
          {repo.language && <Badge colorScheme="teal">{repo.language}</Badge>}
        </Title>

        {repo.description && repo.description !== 'No description provided.' && (
          <P>{repo.description}</P>
        )}

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href={repo.html_url} target="_blank">
              View on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {repo.homepage && (
            <ListItem>
              <Meta>Website</Meta>
              <Link href={repo.homepage} target="_blank">
                {repo.homepage} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          )}
          {repo.language && (
            <ListItem>
              <Meta>Language</Meta>
              <span>{repo.language}</span>
            </ListItem>
          )}
          {repo.topics && repo.topics.length > 0 && (
            <ListItem>
              <Meta>Topics</Meta>
              <span>{repo.topics.join(', ')}</span>
            </ListItem>
          )}
        </List>

        <HStack spacing={{ base: 2, md: 4 }} my={4} justify="center" flexWrap="wrap">
          {repo.stargazers_count > 0 && (
            <Badge fontSize="0.8em" variant="subtle" display="flex" alignItems="center" gap={1} px={2} py={1}>
              <FaStar size={12} /> {repo.stargazers_count} stars
            </Badge>
          )}
          {repo.forks_count > 0 && (
            <Badge fontSize="0.8em" variant="subtle" display="flex" alignItems="center" gap={1} px={2} py={1}>
              <FaCodeBranch size={12} /> {repo.forks_count} forks
            </Badge>
          )}
          {updatedDate && (
            <Badge fontSize="0.8em" variant="subtle" display="flex" alignItems="center" gap={1} px={2} py={1}>
              <FaCalendarAlt size={12} /> Updated {updatedDate}
            </Badge>
          )}
        </HStack>

        {readme && (
          <>
            <Divider my={6} />
            <Heading as="h4" fontSize={16} my={4}>
              <Center>README</Center>
            </Heading>
            <ReadmeContent content={readme} />
          </>
        )}
      </Container>
    </Layout>
  )
}

const ReadmeContent = ({ content }) => {
  const codeBg = useColorModeValue('gray.100', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')

  return (
    <Box
      className="readme-content"
      fontSize="sm"
      lineHeight="tall"
      overflowX="hidden"
      wordBreak="break-word"
      sx={{
        'h1, h2, h3, h4, h5, h6': {
          fontWeight: 'bold',
          mt: 4,
          mb: 2
        },
        h1: { fontSize: 'xl' },
        h2: { fontSize: 'lg' },
        h3: { fontSize: 'md' },
        p: { mb: 3 },
        'ul, ol': {
          pl: 6,
          mb: 3
        },
        li: { mb: 1 },
        code: {
          bg: codeBg,
          px: 1,
          py: 0.5,
          borderRadius: 'sm',
          fontSize: 'xs'
        },
        pre: {
          bg: codeBg,
          p: { base: 2, md: 3 },
          borderRadius: 'md',
          overflowX: 'auto',
          mb: 3,
          maxW: '100%',
          code: {
            bg: 'transparent',
            p: 0
          }
        },
        a: {
          color: 'teal.400',
          textDecoration: 'underline'
        },
        img: {
          maxW: '100%',
          borderRadius: 'md',
          my: 2
        },
        blockquote: {
          borderLeftWidth: '4px',
          borderLeftColor: borderColor,
          pl: 4,
          ml: 0,
          opacity: 0.8,
          mb: 3
        },
        table: {
          width: '100%',
          mb: 3
        },
        'th, td': {
          borderWidth: '1px',
          borderColor: borderColor,
          px: 2,
          py: 1,
          fontSize: 'xs'
        },
        hr: {
          my: 4,
          borderColor: borderColor
        }
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  )
}

export default RepoDetail
