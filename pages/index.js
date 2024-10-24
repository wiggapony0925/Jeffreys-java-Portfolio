import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Stack,
  ListItem,
  useColorModeValue,
  chakra,
  Text,
  IconButton,
  Tooltip,
  Divider
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => {
  return (
    <Layout>
      <Container mt={6}>
        {/* Intro Section */}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Welcome! I’m Jeffrey Fernandez, a passionate software engineering student currently employed at JPMorgan Chase.
        </Box>

        {/* Profile Section */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jeffrey Fernandez
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
              Software Engineer | Research Scientist | Data Enthusiast
            </Text>
            <Box mt={2} mb={4}>
              <Image
                src="/images/cloud-badge.png"
                alt="AWS Cloud Practitioner Badge"
                width={50}
                height={50}
              />
            </Box>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/takuya.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box alignContent="center">
          <Stack direction="row" spacing={4} mt="4" mb={6}>
            <Tooltip label="Email Me">
              <IconButton
                aria-label="Email"
                icon={<EmailIcon />}
                colorScheme="teal"
                onClick={() => window.open('mailto:ninjeff06@gmail.com?subject=Hello%20from%20Chakra%20UI')}
              />
            </Tooltip>
            <Tooltip label="Call Me">
              <IconButton
                aria-label="Phone"
                icon={<ArrowForwardIcon />}
                colorScheme="teal"
                onClick={() => window.open('tel:+19294255178', "_self")}
              />
            </Tooltip>
            <Tooltip label="View LinkedIn">
              <IconButton
                aria-label="LinkedIn"
                icon={<IoLogoLinkedin />}
                colorScheme="teal"
                onClick={() => window.open('https://linkedin.com/in/jeffrey-fernandez-66857b269', "_blank")}
              />
            </Tooltip>
          </Stack>
        </Box>

        {/* Work Section */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Current Role
          </Heading>
          <Paragraph>
            I am currently employed as a Software Engineer Intern at{' '}
            <Link href="https://www.jpmorgan.com/global" target="_blank">
              JPMorgan Chase (JPMC)
            </Link>. Here, I specialize in both front-end and back-end solutions for the Dining Technology team, contributing to projects that enhance customer experience and streamline operations.
          </Paragraph>
          <Paragraph mt={4}>
            My responsibilities include developing scalable applications using TypeScript, React, and Node.js, collaborating with cross-functional teams, and integrating libraries like Leaflet.js for dynamic restaurant location services.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              Explore My Portfolio
            </Button>
          </Box>
        </Section>

        {/* Bio Section */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2006</BioYear>
            Born in{' '}
            <Link href="https://en.wikipedia.org/wiki/Manta,_Ecuador" target="_blank">
              Manta, Ecuador.
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2021 - Present</BioYear>
            Richmond Hill High School - Co-Captain of Varsity Soccer Team, advanced placement in Computer Science and awarded high honors in Economics and Government.
          </BioSection>
          <BioSection>
            <BioYear>2020 - Present</BioYear>
            Software Engineer Intern at{' '}
            <Link href="https://www.jpmorgan.com" target="_blank">
              JPMorgan Chase
            </Link>, contributing to full-stack projects in the Dining Technology team.
          </BioSection>
        </Section>

        {/* Cool Features - Timeline */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Career Milestones
          </Heading>
          <Stack spacing={3}>
            <Box>
              <Text as="span" fontWeight="bold">2022:</Text> Accepted as NASA Summer Intern, worked as a Research Scientist for CCRI’s Volcanic Emission Impacts project.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">2023:</Text> Completed AWS Certified Cloud Practitioner Certification with Arizona State University.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">2022:</Text> Joined JPMorgan Chase as a Software Engineer Intern, actively contributing to key technology initiatives.
            </Box>
          </Stack>
          <Divider my={4} />
        </Section>

        {/* Interests Section */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Reading, Soccer, Programming, Machine Learning, Boxing, and Working Out.
          </Paragraph>
        </Section>

        {/* Online Presence Section */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/wiggapony0925" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @wiggapony0925
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/JeffreyF0925" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoTwitter />}>
                  @JeffreyF0925
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/jeffrey-fernandez-66857b269" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                  @Jeffrey Fernandez
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* Resume Section */}
          <Heading as="h3" variant="section-title" mt={4}>
            Resume
          </Heading>
          <Paragraph>
            Please find my resume below, detailing my software engineering experience and skills.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://flowcv.com/resume/lrwhfk8wep"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              View My Resume
            </Button>
          </Box>
        </Section>

        {/* Gallery Section */}
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Soccer Gallery
          </Heading>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
            <div>
              <Image src="/soccer/soccer1.JPG" alt="Soccer Game 1" layout="responsive" width={600} height={400} />
            </div>
            <div>
              <Image src="/soccer/soccer2.jpeg" alt="Soccer Game 2" layout="responsive" width={600} height={400} />
            </div>
            <div>
              <Image src="/soccer/soccer3.jpg" alt="Soccer Game 3" layout="responsive" width={600} height={400} />
            </div>
            <div>
              <Image src="/soccer/soccer4.jpg" alt="Soccer Game 3" layout="responsive" width={600} height={400} />
            </div>
            <div>
              <Image src="/soccer/soccer5.jpg" alt="Soccer Game 3" layout="responsive" width={600} height={400} />
            </div>
            <div>
              <Image src="/soccer/soccer6.jpeg" alt="Soccer Game 3" layout="responsive" width={600} height={400} />
            </div>
          </Carousel>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
