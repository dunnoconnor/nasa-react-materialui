import React from 'react';
import {render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('render header component', () =>{
    render(<Header/>);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toContainHTML('NASA Images');
})