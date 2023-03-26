const supportSymbol = typeof Symbol === 'function' && Symbol.for;

// 数字0xeac7 看起来像React而已
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
