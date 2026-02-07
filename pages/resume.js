import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Box, Button, Heading, Flex, Link, Container, useColorModeValue } from '@chakra-ui/react';
import { MdFileDownload, MdZoomIn, MdZoomOut } from 'react-icons/md';
import Layout from '../components/layouts/article';

// Dynamically import the PdfViewer wrapper with SSR disabled
const PdfViewer = dynamic(() => import('../components/pdf-viewer'), {
  ssr: false,
  loading: () => <Box p={10} textAlign="center">Loading PDF Support...</Box>
});

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [zoom, setZoom] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Hooks moved to top level
  const headerColor = useColorModeValue('teal.600', 'teal.200');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');

  // Responsive PDF sizing
  useEffect(() => {
    setMounted(true);
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jeffrey_Fernandez_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2.0));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.6));

  // Dynamic calculations for a better fit
  const pdfWidth = Math.min(width * 0.9, 800) * zoom;

  if (!mounted) {
    return (
      <Layout title="Resume">
        <Container maxW="container.lg" centerContent>
          <Box p={10}>Loading...</Box>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title="Resume">
      <Container maxW="container.lg" centerContent>
        <Flex direction="column" align="center" justify="center" minHeight="80vh" py={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center" mb={6}>
              <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} mb={4} color={headerColor}>
                Resume
              </Heading>

              <Flex gap={2} justify="center" wrap="wrap">
                <Button
                  leftIcon={<MdFileDownload />}
                  colorScheme="teal"
                  onClick={handleDownload}
                >
                  Download PDF
                </Button>
                <Button onClick={handleZoomOut} isDisabled={zoom <= 0.6}>
                  <MdZoomOut />
                </Button>
                <Button onClick={handleZoomIn} isDisabled={zoom >= 2.0}>
                  <MdZoomIn />
                </Button>
              </Flex>
            </Box>

            <Box
              boxShadow="lg"
              borderRadius="md"
              overflow="hidden"
              border="1px solid"
              borderColor={borderColor}
              maxW="100%"
              overflowX="auto"
            >
              <PdfViewer
                file="/resume.pdf"
                width={pdfWidth}
              />
            </Box>

            <Box mt={8} textAlign="center">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button variant="outline" colorScheme="teal" borderRadius="full" px={8}>
                  Back to Homepage
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Resume;
