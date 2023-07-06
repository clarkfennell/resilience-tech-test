// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig')
const untranspiledModulePatterns = []
const createJestConfig = nextJest({
 dir: './',
})
const customJestConfig = {
 testEnvironment: 'jest-environment-jsdom',
 testMatch: ['<rootDir>/**/*.test.{js,jsx,ts,tsx}'],
 transformIgnorePatterns: [`node_modules/(?!(${untranspiledModulePatterns.join('|')}))`],
 moduleDirectories: ['node_modules', '<rootDir>/'],
 moduleNameMapper: {
  ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
 },
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
