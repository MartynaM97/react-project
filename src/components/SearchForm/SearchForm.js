import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateSearchString } from "../../redux/searchStringRedux.js";

const SearchForm = () => {
  const phrase = useSelector((state) => state.searchString);

  const [searchString, setSearchString] = useState(phrase || "");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
