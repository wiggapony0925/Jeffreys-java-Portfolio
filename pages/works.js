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
  HStack
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import AnimatedWorkCard from '../components/ui/animated-work-card'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.png'
import thumbCareerwise from '../public/images/works/careerwise.png'

/** Shared entrance animation variants for work sections */
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const Works = () => (
  <Layout title="Works">
    <Container>
      {/* Author Card */}
      <Center>
        <Flex mt={15} align="center">
          <Avatar
            src="/images/takuya.png"
            ml={3}
            mb={3}
            alignContent="center"
          />
          <Box ml={3}>
            <Text fontWeight="bold">
              Jeffrey Fernandez
              <Badge ml={3} colorScheme="teal">
                Active
              </Badge>
            </Text>
            <Text fontSize="sm">Software Engineer</Text>
          </Box>
        </Flex>
      </Center>

      {/* Careerwise / Business Essentials */}
      <Section>
        <motion.div {...fadeInDown}>
          <Heading
            as="h3"
            fontSize={20}
            mt={10}
            mb={6}
            textAlign="center"
            variant="section-title"
          >
            Careerwise/Business Essentials
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <AnimatedWorkCard
              id="week_one"
              title="Week One"
              thumbnail={thumbCareerwise}
            >
              This is the first week of the careerwise/business essentials
              program.
            </AnimatedWorkCard>
          </SimpleGrid>
        </motion.div>
      </Section>

      {/* Technical Works */}
      <Section>
        <motion.div {...fadeInUp}>
          <Heading
            as="h3"
            fontSize={20}
            mb={4}
            mt={20}
            textAlign="center"
            variant="section-title"
          >
            Works
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <AnimatedWorkCard
              id="virusSimulator"
              title="Python Virus Building Simulation"
              thumbnail={thumbInkdrop}
            >
              Graphs the state of each individual in the building simulation.
            </AnimatedWorkCard>

            <AnimatedWorkCard
              id="plotting"
              title="MERRA-2 NetCDF plotting"
              thumbnail={thumbWalknote}
            >
              Plotting a Graph from MERRA-2 NetCDF Files using Python.
            </AnimatedWorkCard>

            <AnimatedWorkCard
              id="MNIST"
              title="MNIST dataset with neural networks"
              thumbnail={thumbFourPainters}
            >
              MNIST provides a baseline for testing image processing systems.
            </AnimatedWorkCard>
          </SimpleGrid>
        </motion.div>
      </Section>

      {/* GitHub Link */}
      <motion.div {...fadeInUp}>
        <Box align="center" my={4} display="flex" justifyContent="center">
          <HStack
            alignItems="center"
            as={NextLink}
            href="https://github.com/wiggapony0925?tab=repositories"
            scroll={false}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button colorScheme="teal" leftIcon={<FaGithub />} size="lg">
                My Projects
              </Button>
            </motion.div>
          </HStack>
        </Box>
      </motion.div>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
