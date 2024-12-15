import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig( {
	plugins: [ react() ],
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			reporter: [ 'text', 'html' ],
		},
		setupFiles: './test.setup.js', // Path to the setup file that is run with each test suite
	},
} );
