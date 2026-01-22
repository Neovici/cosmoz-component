import { html } from 'lit-html';
import '../src/component';

export default {
  title: 'CosmozComponent',
  component: 'cosmoz-component',
  argTypes: {
    greeting: { control: 'text' },
  },
};

export const Default = {
  args: {
    greeting: 'Hello',
  },
  render: (args) => html`<cosmoz-component greeting=${args.greeting}></cosmoz-component>`,
};

export const CustomGreeting = {
  render: () => html`<cosmoz-component greeting="Hi there"></cosmoz-component>`,
};

export const NoGreeting = {
  render: () => html`<cosmoz-component></cosmoz-component>`,
};
