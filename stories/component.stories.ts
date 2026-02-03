import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/component';

interface StoryArgs {
	greeting: string;
}

const meta: Meta<StoryArgs> = {
	title: 'CosmozComponent',
	component: 'cosmoz-component',
	tags: ['autodocs'],
	argTypes: {
		greeting: { control: 'text', description: 'Greeting text' },
	},
	args: {
		greeting: 'Hello',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) =>
		html`<cosmoz-component
			greeting=${args.greeting}
		></cosmoz-component>`,
};

export const CustomGreeting: Story = {
	args: { greeting: 'Hi there' },
};

export const NoGreeting: Story = {
	args: { greeting: '' },
};
