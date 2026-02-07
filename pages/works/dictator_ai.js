import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
    UnorderedList
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/ui/work';
import P from '../../components/ui/paragraph';
import Layout from '../../components/layouts/article';

const DictatorAI = () => (
    <Layout title="Dictator AI">
        <Container>
            <Title>
                Dictator AI <Badge>2024</Badge>
            </Title>
            <P>
                Dictator AI is a modern web application that bridges the gap between reading and listening. It analyzes PDF documents, segments them into natural paragraphs, and uses OpenAI&apos;s advanced TTS (Text-to-Speech) models to narrate them with human-like quality. Unlike standard screen readers, Dictator AI provides spatial context—highlighting the exact text block being read on the original PDF layout in real-time.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/wiggapony0925/Dictator_ai" target="_blank">
                        GitHub Repo <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web / Mobile</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React 19, Vite, TypeScript, Flask, OpenAI, Docker</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Key Features</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Badge mr={2}>Studio-Quality Audio</Badge>
                    Powered by OpenAI&apos;s tts-1 & tts-1-hd neural voice engine.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Smart Selection</Badge>
                    Automatically chooses between speed and quality models.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Mobile-First</Badge>
                    Buttery-smooth layout adapting from desktop split-views to mobile bottom-sheets.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Interactive</Badge>
                    Click any paragraph on the PDF to jump the audio instantly to that spot.
                </ListItem>
            </UnorderedList>

            <WorkImage src="/images/works/dictator_ai.png" alt="Dictator AI" />
        </Container>
    </Layout>
);

export default DictatorAI;
export { getServerSideProps } from '../../components/chakra';
