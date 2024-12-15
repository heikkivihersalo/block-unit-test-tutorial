import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Edit from '../edit';

vi.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: vi.fn(),
} ) );

describe( '#edit', () => {
	afterEach( () => {
		vi.restoreAllMocks();
	} );

	it( 'should render the edit component', () => {
		render(
			<Edit
				{ ...{
					attributes: {},
					setAttributes: vi.fn(),
				} }
			/>
		);

		expect(
			screen.getByTestId( 'edit-component-text' )
		).toBeInTheDocument();
	} );
} );
