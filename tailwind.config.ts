import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom e-commerce colors
				navy: {
					50: '#f0f3f8',
					100: '#d8e0ed',
					200: '#b3c5dc',
					300: '#8aa2c8',
					400: '#6a83b8',
					500: '#4a63a7',
					600: '#3b4e86',
					700: '#2c3a66',
					800: '#1d2745',
					900: '#0e1323',
				},
				forest: {
					50: '#edf7ed',
					100: '#d1ebd0',
					200: '#a8d8a7',
					300: '#7ec27c',
					400: '#5aac58',
					500: '#3c903a',
					600: '#2f732e',
					700: '#235622',
					800: '#183a16',
					900: '#0c1d0b',
				},
				amber: {
					50: '#fff8e5',
					100: '#ffedb3',
					200: '#ffe180',
					300: '#ffd54d',
					400: '#ffca1a',
					500: '#e6b300',
					600: '#b38c00',
					700: '#806400',
					800: '#4d3c00',
					900: '#1a1400',
				},
				coral: {
					50: '#fef1f0',
					100: '#fbd7d3',
					200: '#f7b0a7',
					300: '#f3887b',
					400: '#ef604f',
					500: '#eb3923',
					600: '#bc2d1c',
					700: '#8d2114',
					800: '#5e160d',
					900: '#2f0b07',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
