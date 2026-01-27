import { multiply, sum } from '../utils';

export const Button = (props: { label: string; onClick?: () => void }) => {
  return `<button>${props.label}</button>`;
};

export const Card = (props: { title: string; content: string }) => {
  return `<div class="card"><h2>${props.title}</h2><p>${props.content}</p></div>`;
};

export const Input = (props: { placeholder?: string; value?: string }) => {
  return `<input placeholder="${props.placeholder || ''}" value="${props.value || ''}" />`;
};

export const Modal = (props: {
  title: string;
  children: string;
  onClose?: () => void;
}) => {
  return `<div class="modal"><div class="modal-header"><h3>${props.title}</h3></div><div class="modal-body">${props.children}</div></div>`;
};

// New: Using utils functions
export const Counter = (initialValue: number = 0) => {
  let count = initialValue;
  return {
    increment: () => sum(count++, 1),
    minus: () => sum(count--, 1),
    multiply: (by: number) => multiply(count, by),
    getValue: () => count,
  };
};
