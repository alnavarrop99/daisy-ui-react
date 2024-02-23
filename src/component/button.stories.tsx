import type { Meta, StoryObj } from "@storybook/react";
import { Button, TButton } from "./button";

function Basic({ label, ...props }: TButton & { label: string }) {
  return <Button {...props}>{label}</Button>;
}

function IconsStart({ label, ...props }: TButton & { label: string }) {
  return (
    <Button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {label}
    </Button>
  );
}

function IconsEnd({ label, ...props }: TButton & { label: string }) {
  return (
    <Button {...props}>
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  );
}

function Loading(position: "start" | "end") {
  if (position === "start") {
    return (
      { label, loading, loadingLabel, ...props }: TButton & {
        label: string;
        loadingLabel: string;
        loading?: boolean;
      },
    ) => {
      return (
        <Button {...props} loading={loading}>
          {loading ? loadingLabel : label}
          <Button.Loading />
        </Button>
      );
    };
  } else {return (
      { label, loading, loadingLabel, ...props }: TButton & {
        label: string;
        loadingLabel: string;
        loading?: boolean;
      },
    ) => {
      return (
        <Button {...props} loading={loading}>
          <Button.Loading />
          {loading ? loadingLabel : label}
        </Button>
      );
    };}
}

const meta: Meta = {
  title: "@sys-design/button",
  component: Button,
};
export default meta;

const args: { label: string } = {
  label: "Button",
};

export const _Basic: StoryObj<TButton & { label: string }> = {
  name: "Basic Property",
  args,
  render: Basic,
};

export const _IconsStart: StoryObj<TButton & { label: string }> = {
  name: "Icon Start",
  args,
  render: IconsStart,
};

export const _IconsEnd: StoryObj<TButton & { label: string }> = {
  name: "Icon End",
  args,
  render: IconsEnd,
};

export const _LoadingStart: StoryObj<
  TButton & { label: string; loadingLabel: string; loading?: boolean }
> = {
  name: "Loading End",
  args: {
    ...args,
    loading: true,
    loadingLabel: "Loading",
  },
  argTypes: {
    loadingLabel: {
      name: "loading-label",
      type: "string",
    },
  },
  render: Loading("start"),
};

export const _LoadingEnd: StoryObj<
  TButton & { label: string; loadingLabel: string; loading?: boolean }
> = {
  name: "Loading Start",
  args: {
    ...args,
    loading: true,
    loadingLabel: "Loading",
  },
  argTypes: {
    loadingLabel: {
      name: "loading-label",
      type: "string",
    },
  },
  render: Loading("end"),
};
