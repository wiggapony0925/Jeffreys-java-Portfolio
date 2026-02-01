import { Center, Container, Heading, SimpleGrid, Badge, Avatar, Flex, Box, Button, Text, HStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbPlotting from '../public/images/works/plotting.png';
import thumbVirus from '../public/images/works/virus_simulation.png';
import thumbMnist from '../public/images/works/mnist.png';
import thumbWeekOne from '../public/images/works/week_one.png';
import thumbDictator from '../public/images/works/dictator_ai.png';
import thumbPurePay from '../public/images/works/purepay.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Center>
        <Flex mt="15" align="center">
          <Avatar src="/images/profile_picture.png" ml="3" mb="3" alignContent="center" />
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

      <Section>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h3" fontSize={20} mt={10} mb={6} textAlign="center" variant="section-title">
            Careerwise/Business Essentials
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="week_one" title="Week One" thumbnail={thumbWeekOne}>
                This is the first week of the careerwise/business essentials program.
              </WorkGridItem>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h3" fontSize={20} mb={4} mt={20} textAlign="center" variant="section-title">
            Feature Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="dictator_ai" title="Dictator AI" thumbnail={thumbDictator}>
                Turn any PDF into an interactive audio experience with real-time text syncing.
              </WorkGridItem>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="purepay" title="PurePay" thumbnail={thumbPurePay}>
                A comprehensive backend system for jewelry store layaway management.
              </WorkGridItem>
            </motion.div>
          </SimpleGrid>

          <Heading as="h3" fontSize={20} mb={4} mt={20} textAlign="center" variant="section-title">
            Past Work
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="virusSimulator" title="Python Virus Building Simulation" thumbnail={thumbVirus}>
                Graphs the state of each individual in the building simulation.
              </WorkGridItem>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="plotting" title="MERRA-2 NetCDF plotting" thumbnail={thumbPlotting}>
                Plotting a Graph from MERRA-2 NetCDF Files using Python.
              </WorkGridItem>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <WorkGridItem id="MNIST" title="MNIST dataset with neural networks" thumbnail={thumbMnist}>
                MNIST provides a baseline for testing image processing systems.
              </WorkGridItem>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box align="center" my={4} display="flex" justifyContent="center">
          <HStack alignItems="center" as={NextLink} href="https://github.com/wiggapony0925?tab=repositories" scroll={false}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button colorScheme="teal" leftIcon={<FaGithub />} size="lg">
                My Projects
              </Button>
            </motion.div>
          </HStack>
        </Box>
      </motion.div>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
