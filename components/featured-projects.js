import {
    Box,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    useColorModeValue,
    Flex,
    IconButton,
    Text,
    Badge,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react'
import { FaStar, FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { GitHubRepoItem } from './github-repo-item'
import MotionBox from './motion-box'
import Section from './section'
import { useRef, useState, useEffect } from 'react'
import NextLink from 'next/link'

const FEATURED_TOPIC = 'jeffreyfernandezmero'

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516'
}

const FeaturedCard = ({ repo }) => {
    // Using standard theme values consistent with GitHubRepoItem and other cards
    const bg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
    const hoverBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.300')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')

    return (
        <LinkBox h="100%" transition="all 0.3s">
            <Box
                p={5}
                bg={bg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="xl"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                transition="all 0.3s"
                _hover={{
                    borderColor: 'teal.300',
                    bg: hoverBg,
                    boxShadow: '0 4px 12px rgba(136, 204, 202, 0.15)'
                }}
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    height="auto"
                    px={3}
                    py={1}
                    bg="teal.500"
                    color="white"
                    borderBottomLeftRadius="lg"
                    borderTopRightRadius="xl"
                    fontSize="xs"
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                    gap={1}
                    zIndex={1}
                >
                    <Icon as={FaStar} boxSize={3} /> Featured
                </Box>

                <Box>
                    <HStack mb={4} align="start" justify="space-between">
                        <Box pr={20}>
                            <Heading size="md" mb={1} fontFamily="heading">
                                <LinkOverlay as={NextLink} href={`/works/repo/${repo.name}`} scroll={false}>
                                    {repo.name}
                                </LinkOverlay>
                            </Heading>
                            <Badge
                                fontSize="0.7em"
                                colorScheme="teal"
                                variant="subtle"
                                display="flex"
                                alignItems="center"
                                gap={1}
                                px={2}
                                py={0.5}
                                borderRadius="full"
                            >
                                {repo.language && (
                                    <Box
                                        as="span"
                                        w="8px"
                                        h="8px"
                                        borderRadius="full"
                                        bg={languageColors[repo.language] || '#ccc'}
                                        display="inline-block"
                                    />
                                )}
                                {repo.language || 'Project'}
                            </Badge>
                        </Box>
                    </HStack>

                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')} mb={4} noOfLines={3}>
                        {repo.description}
                    </Text>
                </Box>

                <HStack spacing={4} mt="auto" pt={4} borderTopWidth="1px" borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}>
                    <HStack fontSize="sm" spacing={1}>
                        <Icon as={FaStar} color="yellow.400" />
                        <Text>{repo.stargazers_count}</Text>
                    </HStack>
                    <HStack fontSize="sm" spacing={1}>
                        <Icon as={FaGithub} />
                        <Text>View Code</Text>
                    </HStack>
                    {repo.homepage && (
                        <HStack fontSize="sm" spacing={1} ml="auto">
                            <Icon as={FaExternalLinkAlt} />
                            <Text>Live</Text>
                        </HStack>
                    )}
                </HStack>
            </Box>
        </LinkBox>
    )
}

const FeaturedProjects = ({ repos = [], viewMode = 'grid', delay = 0 }) => {
    const sectionBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')
    const scrollRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const featuredRepos = (repos || []).filter(
        repo => repo.topics && repo.topics.includes(FEATURED_TOPIC)
    )

    const checkScroll = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            el.addEventListener('scroll', checkScroll)
            // Initial check
            checkScroll()
            // Check on resize
            window.addEventListener('resize', checkScroll)
        }
        return () => {
            if (el) el.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', checkScroll)
        }
    }, [featuredRepos])

    if (featuredRepos.length === 0) {
        return null
    }

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 320
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        }
    }

    return (
        <Section delay={delay}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box
                    bg={sectionBg}
                    borderRadius="xl"
                    p={{ base: 3, md: 6 }}
                    mt={8}
                    position="relative"
                    overflow="hidden"
                >
                    <HStack justify="center" mb={6} spacing={2}>
                        <Icon as={FaStar} boxSize={5} color="yellow.400" />
                        <Heading
                            as="h3"
                            fontSize={20}
                            textAlign="center"
                            variant="section-title"
                        >
                            Featured Projects
                        </Heading>
                    </HStack>

                    {viewMode === 'grid' ? (
                        <SimpleGrid columns={[1, 1, 2]} gap={6}>
                            {featuredRepos.map(repo => (
                                <MotionBox key={repo.id} whileHover={{ y: -5 }}>
                                    <FeaturedCard repo={repo} />
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    ) : (
                        <Box position="relative" px={4}>
                            <Flex
                                ref={scrollRef}
                                overflowX="scroll"
                                gap={6}
                                pb={6}
                                pt={2}
                                px={2}
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        display: 'none'
                                    },
                                    scrollbarWidth: 'none',
                                    scrollSnapType: 'x mandatory'
                                }}
                            >
                                {featuredRepos.map(repo => (
                                    <Box
                                        key={repo.id}
                                        minW={['280px', '320px']}
                                        maxW={['280px', '320px']}
                                        flexShrink={0}
                                        scrollSnapAlign="center"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ height: '100%' }}
                                        >
                                            <FeaturedCard repo={repo} />
                                        </motion.div>
                                    </Box>
                                ))}
                            </Flex>

                            {/* Navigation Buttons */}
                            {showLeftArrow && (
                                <IconButton
                                    aria-label="Scroll Left"
                                    icon={<FaChevronLeft />}
                                    position="absolute"
                                    left="0"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    zIndex={2}
                                    onClick={() => scroll('left')}
                                    display={{ base: 'none', md: 'flex' }}
                                    isRound
                                    size="lg"
                                    colorScheme="teal"
                                    shadow="lg"
                                />
                            )}

                            {showRightArrow && (
                                <IconButton
                                    aria-label="Scroll Right"
                                    icon={<FaChevronRight />}
                                    position="absolute"
                                    right="0"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    zIndex={2}
                                    onClick={() => scroll('right')}
                                    display={{ base: 'none', md: 'flex' }}
                                    isRound
                                    size="lg"
                                    colorScheme="teal"
                                    shadow="lg"
                                />
                            )}

                            {/* Overlay Gradients for smooth fade effect */}
                            <Box
                                position="absolute"
                                left={0}
                                top={0}
                                bottom={0}
                                w="20px"
                                bgGradient={`linear(to-r, ${useColorModeValue('#f0e7db', '#202023')}, transparent)`}
                                pointerEvents="none"
                                display={{ base: 'none', md: 'block' }}
                            />
                            <Box
                                position="absolute"
                                right={0}
                                top={0}
                                bottom={0}
                                w="20px"
                                bgGradient={`linear(to-l, ${useColorModeValue('#f0e7db', '#202023')}, transparent)`}
                                pointerEvents="none"
                                display={{ base: 'none', md: 'block' }}
                            />
                        </Box>
                    )}
                </Box>
            </motion.div>
        </Section>
    )
}

export default FeaturedProjects
