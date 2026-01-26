export const Button = (props: { label: string }) => {
  return `<button>${props.label}</button>`;
};

export const Card = (props: { title: string; content: string }) => {
  return `<div class="card"><h2>${props.title}</h2><p>${props.content}</p></div>`;
};
