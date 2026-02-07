/**
 * AnimatedWorkCard - A reusable hover/tap animated wrapper for work grid items.
 * Combines the repeated motion.div + WorkGridItem pattern into a single component.
 *
 * @param {string}   id          - Work item slug used for routing.
 * @param {string}   title       - Display title for the work item.
 * @param {object}   thumbnail   - Imported image for the thumbnail.
 * @param {ReactNode} children   - Description text shown below the title.
 */
import { motion } from 'framer-motion'
import { WorkGridItem } from '../grid-item'

const AnimatedWorkCard = ({ id, title, thumbnail, children }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
    <WorkGridItem id={id} title={title} thumbnail={thumbnail}>
      {children}
    </WorkGridItem>
  </motion.div>
)

export default AnimatedWorkCard
