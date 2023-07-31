import { render, screen, fireEvent } from '@testing-library/react';
import format from 'date-fns/format';
import App from '../App';

test('default image loads', async () => {
    render(<App />);
    const image = screen.getByRole('img');
    expect(image.src).toContain('loading.jpeg');
});

test('image changes when new date is selected', async () =>{
    render(<App/>);
    const date = format(new Date('07/04/2023'), 'MM/dd/yyy');
    const datePickerElement = screen.getByLabelText('nasa date picker');
    fireEvent.change(datePickerElement, {target: {value:date}});
    const imageElement = await screen.findByAltText('Aurora over Icelandic Waterfall');
    expect(imageElement.src).toContain('https://apod.nasa.gov/apod/image/2307');
})