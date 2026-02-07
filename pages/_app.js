import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
      <Analytics />
      {/* Calendly badge widget */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/ninjeff06',
              text: 'Schedule time with me',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true
            })
          }
        }}
      />
    </Chakra>
  )
}


export default Website
