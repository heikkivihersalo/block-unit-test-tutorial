import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Save from '../save';

vi.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: {
		save: vi.fn(),
	},
} ) );

describe( '#save', () => {
	afterEach( () => {
		vi.restoreAllMocks();
	} );

	it( 'should render the save component', () => {
		render(
			<Save
				{ ...{
					attributes: {},
				} }
			/>
		);
		expect(
			screen.getByTestId( 'save-component-text' )
		).toBeInTheDocument();
	} );
} );
