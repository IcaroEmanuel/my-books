import { useState } from "react";
import { books } from "./dataSearch";
import { SearchContainer, Title, Result } from "./Styles";
import Input from "../Input";

export default function SearchComponent() {
  const [searchBooks, setSearchBooks] = useState([]);

  function doResearch(event) {
    const searchedText = event.target.value;
    const searchResult = books.filter((book) =>
      book.name.includes(searchedText)
    );
    setSearchBooks(searchResult);
  }

  return (
    <SearchContainer>
      <Title>Encontro seu livro em nossa biblioteca</Title>
      <Input
        placeholder="Pesquise por um livro"
        onChange={(event) => doResearch(event)}
      />

      {searchBooks.map((book) => (
        <Result>
          <img src={book.src} alt={book.name} />
          <p>{book.name}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}
