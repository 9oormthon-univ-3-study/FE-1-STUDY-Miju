import * as C from "./ContentItem.style";

export default function ContentItem({ date, category, content, price }) {
  return (
    <C.Container>
      <div>
        <C.Date>{date}</C.Date>
        <C.Content>
          {category} - {content}
        </C.Content>
      </div>
      <C.Price>{price}</C.Price>
    </C.Container>
  );
}
