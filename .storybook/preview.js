import { MemoryRouter } from "react-router-dom";
import GlobalStyles from "../src/GlobalStyles.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Add MemoryRouter to all stories with a decorator

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <GlobalStyles />
        <Story />
      </MemoryRouter>
    </>
  ),
];
