// see in comments how to add MemoryRouter for a single story

// import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

export default {
  title: "Component/Navigation",
  component: Navigation,
  /* decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]*/
};

export const NavigationDefault = <Navigation />;
