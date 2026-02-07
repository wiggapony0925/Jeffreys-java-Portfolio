import { motion } from 'framer-motion'

const MotionBox = ({ children, ...props }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} {...props}>
    {children}
  </motion.div>
)

export default MotionBox
