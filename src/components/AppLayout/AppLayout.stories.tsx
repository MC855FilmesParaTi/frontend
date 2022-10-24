import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AppLayout from "./AppLayout";

export default {
  title: "AppLayout",
  component: AppLayout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
