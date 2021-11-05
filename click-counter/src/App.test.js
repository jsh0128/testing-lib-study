import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

// helper functions to create a shallowWrapper for the app component
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('renders button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
});

test('btn text', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button').text();
    expect(button).toBe('Increment button');
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
});

test('clicking on button increments counter display', () => {
    const wrapper = setup();
    //find button
    const button = findByTestAttr(wrapper, 'increment-button');
    //click button
    button.simulate('click');
    //find the display and test if the number was incremeneted
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
});
test('clicking on button to decrement counter display', () => {
    const wrapper = setup();
    // find button
    const button = findByTestAttr(wrapper, 'decrement-button');
    // click button
    button.simulate('click');
    // find the display and test if the number was decremented
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
});
// test("render div for errors", () => {
//   const wrapper = setup()
//   const errorDisplay = findByTestAttr(wrapper, "error-display")
//   expect(errorDisplay.length).toBe(1)
// })
// test("showing error if decrement button was clicked and count is 0", () => {
//   const wrapper = setup()
//   // find display
//   const display = findByTestAttr(wrapper, "error-display")
// })
