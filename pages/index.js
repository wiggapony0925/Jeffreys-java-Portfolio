import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Stack,
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
              Software Engineer
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
                src="/images/profile_picture.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
                objectFit="cover"
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
                onClick={() => window.open('mailto:ninjeff06@gmail.com?subject=Hello')}
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
            Professional Experience
          </Heading>
          <Paragraph>
            I am currently a Software Engineer Apprentice at{' '}
            <Link href="https://www.jpmorgan.com/global" target="_blank">
              JPMorgan Chase (JPMC)
            </Link>. I deliver secure, accessible, and scalable web experiences in React and TypeScript using internal software tools to develope scalable applicaitons. My work supports millions of Sapphire Reserve customers across mobile, tablet, and desktop platforms.
          </Paragraph>
          <Paragraph mt={4}>
            Additionally, I am the Founder & Lead Software Engineer at <Text as="span" fontWeight="bold">JFM Capital Group LLC (PurePay)</Text>, where I architect scalable web ecosystems using Next.js and AWS, leading technical strategy and full-stack development.
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
            <BioYear>2020 - Present</BioYear>
            Software Engineer Apprentice at{' '}
            <Link href="https://www.jpmorgan.com" target="_blank">
              JPMorgan Chase
            </Link>.
          </BioSection>
          <BioSection>
            <BioYear>2021 - 2025</BioYear>
            <Link href="https://www.richmondhillhs.org/" target="_blank">
              Richmond Hill High School
            </Link> - CareerWise student.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed AWS Cloud Computing course at{' '}
            <Link href="https://www.asu.edu/" target="_blank">
              Arizona State University
            </Link> and College Now coursework at <Link href="https://www.bmcc.cuny.edu/" target="_blank">BMCC</Link>.
          </BioSection>
          <BioSection>
            <BioYear>2025 - Present</BioYear>
            Founder & Lead Software Engineer at <Text as="span" fontWeight="bold">JFM Capital Group LLC (PurePay)</Text>.
          </BioSection>
          <BioSection>
            <BioYear>2025 - Present</BioYear>
            Pursuing BS in Computer Science & Information Security at{' '}
            <Link href="https://www.jjay.cuny.edu/" target="_blank">
              John Jay College
            </Link>.
          </BioSection>
        </Section>

        {/* Timeline Section */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Career Milestones
          </Heading>
          <Stack spacing={3}>
            <Box>
              <Text as="span" fontWeight="bold">2022:</Text> Accepted as NASA Summer Intern, worked as a Research Scientist for CCRI’s Volcanic Emission Impacts project.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">2023:</Text> Achieved AWS Certified Cloud Practitioner badge.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">2025:</Text> Launched PurePay MVP payment infrastructure integrating Stripe Connect.
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
            Art, Reading, Soccer, Programming, Machine Learning, Boxing, Finance, and Entrepreneurship.
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
              href="/resume"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              View My Resume
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
