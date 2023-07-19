import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Button, Heading, Flex, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Container } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [zoom, setZoom] = useState(1);
  const [isZoomOutLimit, setIsZoomOutLimit] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'my_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    if (zoom < 2) {
      setZoom((prevZoom) => prevZoom + 0.2);
      setIsZoomOutLimit(false);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0.4) {
      setZoom((prevZoom) => prevZoom - 0.2);
    } else {
      setIsZoomOutLimit(true);
      onOpen();
    }
  };

  return (
    <Layout title={'resume'}>
      <Container>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh"
          p={4}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Box mb={10}>
              <Heading as="h1" fontSize="3xl" color="pink.500">
                My Resume
              </Heading>
              <Flex mt={4}>
                <Button
                  colorScheme="pink"
                  onClick={handleDownload}
                  marginRight={2}
                >
                  Download PDF
                </Button>
                <Button
                  colorScheme={isZoomOutLimit ? 'red' : 'pink'}
                  onClick={handleZoomIn}
                  marginRight={2}
                >
                  Zoom In
                </Button>
                <Button
                  colorScheme={isZoomOutLimit ? 'red' : 'pink'}
                  onClick={handleZoomOut}
                >
                  Zoom Out
                </Button>
              </Flex>
            </Box>
            <Box maxWidth="100%" overflowX="auto">
              <Document
                file="/resume.pdf"
                options={{
                  cMapUrl: 'cmaps/',
                  cMapPacked: true,
                  renderer: 'svg',
                }}
              >
                <Page
                  pageNumber={1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={600 * zoom} // Adjust the width to your preference
                />
                <Page
                  pageNumber={2}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={600 * zoom} // Adjust the width to your preference
                />
              </Document>
            </Box>
            <Box mt={4}>
              <Link
                color="blue.500"
                href="/"
                fontWeight="bold"
                textDecoration="none"
              >
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size="lg"
                  borderRadius="full"
                  paddingX={8}
                >
                  Go Back to Homepage
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Zoom Limit Reached</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You have reached the minimum zoom level. Further zoom-out is not allowed.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="pink" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  );
};

export default Resume;
