import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchmain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding; 20px 9px;
  }
`;
const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

export const Search = () => {
  const [searched, setSearched] = useState("");

  const handleChange = async (e) => {
    setSearched(e.target.value);
  };

  return (
    <Searchmain>
      <div className="searchBarContainer">
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }} />
          <input
            type="text"
            placeholder="Search Artist/Podcasts"
            className="searchInput"
            value={searched}
            onChange={(e) => handleChange(e)}
          />
        </SearchBar>
      </div>
      {searched === "" ? (
        <Categories>
          <Heading>Browse All</Heading>
          <BrowseAll></BrowseAll>
        </Categories>
      ) : (
        <>Hi</>
      )}
    </Searchmain>
  );
};
