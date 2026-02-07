import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Badge,
  Avatar,
  Flex,
  Box,
  Button,
  Text,
  HStack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaGithub, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GitHubRepoItem } from '../components/github-repo-item'
import thumbPlotting from '../public/images/works/plotting.png'
import thumbVirus from '../public/images/works/virus_simulation.png'
import thumbMnist from '../public/images/works/mnist.png'
import thumbWeekOne from '../public/images/works/week_one.png'
import thumbDictator from '../public/images/works/dictator_ai.png'
import thumbPurePay from '../public/images/works/purepay.png'

const GITHUB_USERNAME = 'wiggapony0925'

const Works = ({ repos = [] }) => {
  const sectionBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')

  return (
    <Layout title="Works">
      <Container>
        <Center>
          <Flex mt="15" align="center">
            <Avatar
              src="/images/profile_picture.png"
              ml="3"
              mb="3"
              alignContent="center"
            />
            <Box ml="3">
              <Text fontWeight="bold">
                Jeffrey Fernandez
                <Badge ml="3" colorScheme="teal">
                  Active
                </Badge>
              </Text>
              <Text fontSize="sm">Software Engineer</Text>
            </Box>
          </Flex>
        </Center>

        {repos.length > 0 && (
          <Section>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                bg={sectionBg}
                borderRadius="xl"
                p={6}
                mt={8}
              >
                <HStack justify="center" mb={4} spacing={2}>
                  <Icon as={FaGithub} boxSize={5} />
                  <Heading
                    as="h3"
                    fontSize={20}
                    textAlign="center"
                    variant="section-title"
                  >
                    GitHub Repositories
                  </Heading>
                </HStack>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                  {repos.map(repo => (
                    <motion.div
                      key={repo.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <GitHubRepoItem repo={repo} />
                    </motion.div>
                  ))}
                </SimpleGrid>

                <Box align="center" mt={6}>
                  <HStack
                    alignItems="center"
                    as={NextLink}
                    href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                    scroll={false}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        colorScheme="teal"
                        leftIcon={<FaGithub />}
                        size="md"
                      >
                        View All on GitHub
                      </Button>
                    </motion.div>
                  </HStack>
                </Box>
              </Box>
            </motion.div>
          </Section>
        )}

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HStack justify="center" mt={10} mb={6} spacing={2}>
              <Icon as={FaCode} boxSize={5} color="teal.300" />
              <Heading
                as="h3"
                fontSize={20}
                textAlign="center"
                variant="section-title"
              >
                Feature Projects
              </Heading>
            </HStack>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="dictator_ai"
                  title="Dictator AI"
                  thumbnail={thumbDictator}
                >
                  Turn any PDF into an interactive audio experience with
                  real-time text syncing.
                </WorkGridItem>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="purepay"
                  title="PurePay"
                  thumbnail={thumbPurePay}
                >
                  A comprehensive backend system for jewelry store layaway
                  management.
                </WorkGridItem>
              </motion.div>
            </SimpleGrid>

            <Heading
              as="h3"
              fontSize={20}
              mb={4}
              mt={14}
              textAlign="center"
              variant="section-title"
            >
              Careerwise/Business Essentials
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="week_one"
                  title="Week One"
                  thumbnail={thumbWeekOne}
                >
                  This is the first week of the careerwise/business essentials
                  program.
                </WorkGridItem>
              </motion.div>
            </SimpleGrid>

            <Heading
              as="h3"
              fontSize={20}
              mb={4}
              mt={14}
              textAlign="center"
              variant="section-title"
            >
              Past Work
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="virusSimulator"
                  title="Python Virus Building Simulation"
                  thumbnail={thumbVirus}
                >
                  Graphs the state of each individual in the building
                  simulation.
                </WorkGridItem>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="plotting"
                  title="MERRA-2 NetCDF plotting"
                  thumbnail={thumbPlotting}
                >
                  Plotting a Graph from MERRA-2 NetCDF Files using Python.
                </WorkGridItem>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WorkGridItem
                  id="MNIST"
                  title="MNIST dataset with neural networks"
                  thumbnail={thumbMnist}
                >
                  MNIST provides a baseline for testing image processing
                  systems.
                </WorkGridItem>
              </motion.div>
            </SimpleGrid>
          </motion.div>
        </Section>

        {repos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box align="center" my={4} display="flex" justifyContent="center">
              <HStack
                alignItems="center"
                as={NextLink}
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                scroll={false}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    colorScheme="teal"
                    leftIcon={<FaGithub />}
                    size="lg"
                  >
                    My Projects
                  </Button>
                </motion.div>
              </HStack>
            </Box>
          </motion.div>
        )}
      </Container>
    </Layout>
  )
}

export default Works

export async function getServerSideProps({ req }) {
  let repos = []
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          })
        }
      }
    )
    if (response.ok) {
      const data = await response.json()
      repos = data
        .filter(repo => !repo.fork && !repo.archived && !repo.private)
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description provided.',
          html_url: repo.html_url,
          homepage: repo.homepage || null,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics || []
        }))
    }
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
  }

  return {
    props: {
      cookies: req.headers.cookie ?? '',
      repos
    }
  }
}
