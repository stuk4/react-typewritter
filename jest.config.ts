export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  fakeTimers: { enableGlobally: true },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
