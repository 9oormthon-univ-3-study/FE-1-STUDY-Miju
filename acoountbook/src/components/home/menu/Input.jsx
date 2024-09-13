import * as I from "./Input.style";

export default function Input({ name, title, type, placeholder, value }) {
  return (
    <I.Container>
      <I.Title for={name}>{title}</I.Title>
      <I.Input type={type} id={name} placeholder={placeholder} value={value} />
    </I.Container>
  );
}
