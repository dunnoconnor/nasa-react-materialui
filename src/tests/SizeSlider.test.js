import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SizeSlider from '../components/SizeSlider';
import App from '../App';

test('renders size slider component',()=>{
    const mockSetSize = jest.fn()
    render(<SizeSlider size={50} setSize={mockSetSize}/>);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toBeInTheDocument();
})

test('size value set by props',()=>{
    const mockSetSize = jest.fn()
    render(<SizeSlider size={50} setSize={mockSetSize}/>);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveValue('50')
})

test('size value reflects user input',()=>{
    render(<App/>);
    const sliderElement = screen.getByRole('slider');
    fireEvent.change(sliderElement, {target: {value:'100'}})
    expect(sliderElement).toHaveValue('100')
})