import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import format from 'date-fns/format';
import App from '../App';

test('renders date picker component', ()=>{
    render(<App/>);
    const datePickerElement = screen.getByLabelText('nasa date picker');
    expect(datePickerElement).toBeInTheDocument();
})

test('change date when user selects a new date', () => {
    render(<App/>);
    const date = format(new Date('07/04/2023'), 'MM/dd/yyy');
    const datePickerElement = screen.getByLabelText('nasa date picker');
    fireEvent.change(datePickerElement, {target: {value:date}});
    const updatedDate = screen.getByDisplayValue('07/04/2023');
    expect(updatedDate).toBeInTheDocument();
})