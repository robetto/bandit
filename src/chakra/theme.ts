// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        100: '#ff3c00',
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
    fonts: {
        body: "Open Sans"
    },
    styles: {
        global: () => {
            body: {
                bg: "gray.200"
            }
        }
    }
}

export const theme = extendTheme({ colors })