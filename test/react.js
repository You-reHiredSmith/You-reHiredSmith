import React from 'React';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime'; 
import jest from 'jest';

describe('Unit testing React components', () => {

    describe('Table Rows', () => {
        let row;
        const props = {
            createdDate: 'Test Date',
            companyName: 'Ryan & Gabriel LLC',
            status: '',
            contact: '',
            posting: '',
        }

        beforeAll(() => {
            row = render(<Row {... props} />);
        })

        it('Renders the value on companyName property', () => {
            expect(row.getByText('Test Date').nextSibling).toHaveTextContent('Ryan & Gabriel LLC');
        })



    })



});