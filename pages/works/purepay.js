import {
    Container,
    Badge,
    List,
    ListItem,
    Heading,
    Center,
    UnorderedList
} from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const PurePay = () => (
    <Layout title="PurePay">
        <Container>
            <Title>
                PurePay <Badge>2025</Badge>
            </Title>
            <P>
                A comprehensive backend system for jewelry store layaway management with Stripe payments, AWS integration, and multi-channel notifications. PurePay enables jewelers to offer flexible payment plans while automating billing, notifications, and inventory tracking.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Status</Meta>
                    <span>In Development / MVP</span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Backend API / Web Dashboard</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Node.js, Stripe Connect, AWS (RDS, SES, SNS), PostgreSQL</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Core Functionality</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Badge mr={2}>Layaway Management</Badge>
                    Create plans, generate QR codes for customers, and track progress.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Stripe Integration</Badge>
                    Secure payment processing with automated recurring billing.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Smart Notifications</Badge>
                    AWS SES & SNS integration for email and SMS payment reminders.
                </ListItem>
                <ListItem>
                    <Badge mr={2}>Analytics</Badge>
                    Real-time dashboard for store performance and customer insights.
                </ListItem>
            </UnorderedList>

            <WorkImage src="/images/works/purepay.png" alt="PurePay" />
        </Container>
    </Layout>
);

export default PurePay;
export { getServerSideProps } from '../../components/chakra';
