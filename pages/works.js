import { useEffect, useMemo, useState } from 'react'
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
  Icon
} from '@chakra-ui/react'
import { FaGithub, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/ui/section'
import { WorkGridItem } from '../components/ui/grid-item'
import { GitHubRepoItem } from '../components/github-repo-item'
import MotionBox from '../components/ui/motion-box'
import thumbPlotting from '../public/images/works/plotting.png'
import thumbVirus from '../public/images/works/virus_simulation.png'
import thumbMnist from '../public/images/works/mnist.png'
import thumbWeekOne from '../public/images/works/week_one.png'
import thumbDictator from '../public/images/works/dictator_ai.png'
import thumbPurePay from '../public/images/works/purepay.png'
import FeaturedProjects from '../components/featured-projects'
import { GITHUB_USERNAME, FEATURED_TOPIC } from '../lib/constants'
import { getReposServerSideProps } from '../lib/github'

const REPOS_PER_PAGE = 10

const Works = ({ repos = [] }) => {
  const [visibleCount, setVisibleCount] = useState(REPOS_PER_PAGE)
  const otherRepos = useMemo(
    () =>
      repos.filter(
        repo => !repo.topics || !repo.topics.includes(FEATURED_TOPIC)
      ),
    [repos]
  )
  const visibleRepos = otherRepos.slice(0, visibleCount)
  const hasMore = visibleCount < otherRepos.length

  // Cache repos in localStorage so detail pages can load without server-side API calls
  useEffect(() => {
    if (repos.length > 0 && typeof window !== 'undefined') {
      try {
        localStorage.setItem('github_repos', JSON.stringify(repos))
      } catch (e) {
        // localStorage might be full or unavailable
      }
    }
  }, [repos])

  return (
    <Layout title="Works">
      <Container>
        <Center>
          <Flex mt={6} align="center" flexWrap="wrap" justify="center">
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

        <FeaturedProjects repos={repos} viewMode="grid" />

        {otherRepos.length > 0 && (
          <Section>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                bg="bg.section"
                borderRadius="xl"
                p={{ base: 3, md: 6 }}
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
                  {visibleRepos.map(repo => (
                    <MotionBox key={repo.id}>
                      <GitHubRepoItem repo={repo} />
                    </MotionBox>
                  ))}
                </SimpleGrid>

                <Box align="center" mt={6}>
                  {hasMore && (
                    <MotionBox>
                      <Button
                        colorScheme="teal"
                        variant="outline"
                        size="md"
                        mb={4}
                        onClick={() =>
                          setVisibleCount(prev => prev + REPOS_PER_PAGE)
                        }
                      >
                        Load More ({otherRepos.length - visibleCount} remaining)
                      </Button>
                    </MotionBox>
                  )}
                  <HStack
                    alignItems="center"
                    as={NextLink}
                    href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                    scroll={false}
                  >
                    <MotionBox>
                      <Button
                        colorScheme="teal"
                        leftIcon={<FaGithub />}
                        size="md"
                      >
                        View All on GitHub
                      </Button>
                    </MotionBox>
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
              <MotionBox>
                <WorkGridItem
                  id="dictator_ai"
                  title="Dictator AI"
                  thumbnail={thumbDictator}
                >
                  Turn any PDF into an interactive audio experience with
                  real-time text syncing.
                </WorkGridItem>
              </MotionBox>
              <MotionBox>
                <WorkGridItem
                  id="purepay"
                  title="PurePay"
                  thumbnail={thumbPurePay}
                >
                  A comprehensive backend system for jewelry store layaway
                  management.
                </WorkGridItem>
              </MotionBox>
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
              <MotionBox>
                <WorkGridItem
                  id="week_one"
                  title="Week One"
                  thumbnail={thumbWeekOne}
                >
                  This is the first week of the careerwise/business essentials
                  program.
                </WorkGridItem>
              </MotionBox>
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
              <MotionBox>
                <WorkGridItem
                  id="virusSimulator"
                  title="Python Virus Building Simulation"
                  thumbnail={thumbVirus}
                >
                  Graphs the state of each individual in the building
                  simulation.
                </WorkGridItem>
              </MotionBox>

              <MotionBox>
                <WorkGridItem
                  id="plotting"
                  title="MERRA-2 NetCDF plotting"
                  thumbnail={thumbPlotting}
                >
                  Plotting a Graph from MERRA-2 NetCDF Files using Python.
                </WorkGridItem>
              </MotionBox>

              <MotionBox>
                <WorkGridItem
                  id="MNIST"
                  title="MNIST dataset with neural networks"
                  thumbnail={thumbMnist}
                >
                  MNIST provides a baseline for testing image processing
                  systems.
                </WorkGridItem>
              </MotionBox>
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
                <MotionBox>
                  <Button
                    colorScheme="teal"
                    leftIcon={<FaGithub />}
                    size="lg"
                  >
                    My Projects
                  </Button>
                </MotionBox>
              </HStack>
            </Box>
          </motion.div>
        )}
      </Container>
    </Layout>
  )
}

export default Works

export { getReposServerSideProps as getServerSideProps }
