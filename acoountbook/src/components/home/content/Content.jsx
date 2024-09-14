import * as C from "./Content.style";
import ContentItem from "./ContentItem";

export default function Content() {
  return (
    <C.Container>
      <ContentItem
        date="2024-01-05"
        category="식비"
        content="세광양대창"
        price="100,000원"
      />
      <ContentItem
        date="2024-01-10"
        category="도서"
        content="모던 자바스크립트"
        price="40,500원"
      />
    </C.Container>
  );
}
