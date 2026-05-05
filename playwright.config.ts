import { defineConfig, devices } from '@playwright/test'

import dotenv from 'dotenv'
import path from 'path'
import * as os from "node:os"
dotenv.config({ path: path.resolve(__dirname, '.env') })

const viewport = { width: 1280, height: 720 }
const headless = process.env.HEADLESS === 'true' || true

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [
		["line"],
		[
			"allure-playwright",
			{
				resultsDir: "allure-results",
				detail: false,
				environmentInfo: {
					os_platform: os.platform(),
					os_release: os.release(),
					os_version: os.version(),
					node_version: process.version,
				},
			}
		]
	],
	expect: {
		timeout: 5000
	},
	timeout: 30000,
	use: {
		baseURL: 'https://www.saucedemo.com/',
		headless: headless,
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
	},

	projects: [
		{
			use: {
				...devices['Desktop Chrome'],
				viewport: viewport
			},
		},
	],
})

