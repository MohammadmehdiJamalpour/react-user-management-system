import SearchBar from "./SearchBar";
import List from "./List";

function Container() {
  return (
    <div className="container gap-2 flex flex-col mx-auto px-4 pt-4 max-w-5xl ">
      <SearchBar />
      <List />
    </div>
  );
}

export default Container;
