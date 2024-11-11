import { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ghost", "outline", "solid"] as ButtonProps["variant"][],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"] as ButtonProps["size"][],
    },
    colorscheme: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "destructive",
      ] as ButtonProps["colorscheme"][],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Botão",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};
