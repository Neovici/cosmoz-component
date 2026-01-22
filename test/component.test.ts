import { assert, expect, fixture, nextFrame } from '@open-wc/testing';
import { html } from 'lit-html';
import '../src/component';

describe('cosmoz-component', () => {
	it('is defined', () => {
		const el = document.createElement('cosmoz-component');
		assert.instanceOf(el, HTMLElement);
	});

	it('renders with default greeting', async () => {
		const el = await fixture(html`<cosmoz-component></cosmoz-component>`);
		const text = el.shadowRoot?.textContent;
		expect(text).to.include('Hello, World!');
	});

	it('renders with custom greeting', async () => {
		const el = await fixture(
			html`<cosmoz-component greeting="Hi"></cosmoz-component>`,
		);
		const text = el.shadowRoot?.textContent;
		expect(text).to.include('Hi, World!');
	});

	it('handles click to increment counter', async () => {
		const el = await fixture(html`<cosmoz-component></cosmoz-component>`);
		const button = el.shadowRoot?.querySelector('button');
		button?.click();
		await nextFrame();
		const text = el.shadowRoot?.textContent;
		expect(text).to.include('Count: 1');
	});
});
