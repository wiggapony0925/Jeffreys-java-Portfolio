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
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa'
import DOMPurify from 'isomorphic-dompurify'
import { Title, Meta } from '../../../components/work'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'

const GITHUB_USERNAME = 'wiggapony0925'

const RepoDetail = ({ repo, readme }) => {
  if (!repo) {
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
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default RepoDetail

export async function getServerSideProps({ params, req }) {
  const { name } = params

  // Validate repo name to prevent injection
  if (!name || !/^[a-zA-Z0-9._-]+$/.test(name)) {
    return { notFound: true }
  }

  let repo = null
  let readme = null

  const headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    })
  }

  try {
    const repoRes = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(name)}`,
      { headers }
    )
    if (repoRes.ok) {
      const data = await repoRes.json()
      repo = {
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
    }
  } catch (error) {
    console.error('Failed to fetch repo:', error)
  }

  if (!repo) {
    return { notFound: true }
  }

  try {
    const readmeRes = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${encodeURIComponent(name)}/readme`,
      {
        headers: {
          ...headers,
          Accept: 'application/vnd.github.v3.html'
        }
      }
    )
    if (readmeRes.ok) {
      const rawHtml = await readmeRes.text()
      readme = DOMPurify.sanitize(rawHtml)
    }
  } catch (error) {
    console.error('Failed to fetch README:', error)
  }

  return {
    props: {
      cookies: req.headers.cookie ?? '',
      repo,
      readme: readme || null
    }
  }
}
