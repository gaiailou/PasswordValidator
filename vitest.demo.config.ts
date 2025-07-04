import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/demo/**/*.test.ts'],
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['**/node_modules/**']
    }
  }
});
