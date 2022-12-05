import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers together', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const runningTotal = container.getByTestId('running-total');
    const plusButton = container.getByTestId('operator-add')
    fireEvent.click(plusButton);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
    
  })

  it('should subtract 4 from 7', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    const subtractButton = container.getByTestId('operator-subtract')
    fireEvent.click(subtractButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multipy 3 by 5', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const runningTotal = container.getByTestId('running-total');
    const multiplyButton = container.getByTestId('operator-multiply')
    fireEvent.click(multiplyButton);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const runningTotal = container.getByTestId('running-total');
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(divideButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatonate multiple button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button5);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('235');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const runningTotal = container.getByTestId('running-total');
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(divideButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsButton1 = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton1);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiplyButton = container.getByTestId('operator-multiply')
    fireEvent.click(multiplyButton);
    const equalsButton2 = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton2);
    expect(runningTotal.textContent).toEqual('9');
  })

  it('clear running total with affecting calculation', () => {
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const runningTotal = container.getByTestId('running-total');
    const multiplyButton = container.getByTestId('operator-multiply')
    fireEvent.click(multiplyButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const clearButton = container.getByTestId('clear')
    fireEvent.click(clearButton);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('35');
  })

})



