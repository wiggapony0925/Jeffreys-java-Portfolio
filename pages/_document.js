import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Calendly badge widget styles */}
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <style>{`
            .calendly-badge-widget .calendly-badge-content {
              font-family: 'M PLUS Rounded 1c', sans-serif;
              font-size: 0.75rem;
              padding: 0 20px;
              height: 40px;
              line-height: 40px;
              border-radius: 20px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .calendly-badge-widget .calendly-badge-content:hover {
              transform: scale(1.05);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            @media (min-width: 768px) {
              .calendly-badge-widget .calendly-badge-content {
                font-size: 0.875rem;
                padding: 0 28px;
                height: 48px;
                line-height: 48px;
                border-radius: 24px;
              }
            }
            @media (min-width: 1280px) {
              .calendly-badge-widget .calendly-badge-content {
                font-size: 1rem;
                padding: 0 32px;
                height: 52px;
                line-height: 52px;
                border-radius: 26px;
              }
            }
          `}</style>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
