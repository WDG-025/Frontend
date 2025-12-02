import { use, useActionState } from "react";
import { searchProducts } from "../api/index.js";
import { Instructions, SearchForm, SearchResults } from "../components/index.js";

const productsPromise = searchProducts();

async function searchAction(_prevState, formData) {
  const { category, query } = Object.fromEntries(formData);
  const parsedMin = parseFloat(formData.get("minPrice"));
  const minPrice = Number.isNaN(parsedMin) ? undefined : parsedMin;
  const parsedMax = parseFloat(formData.get("maxPrice"));
  const maxPrice = Number.isNaN(parsedMax) ? undefined : parsedMax;

  console.log({ category, query, minPrice, maxPrice });
  const result = await searchProducts({ category, minPrice, maxPrice, query });
  return result;
}

const Search = () => {
  const [state, formAction, isPending] = useActionState(searchAction, use(productsPromise));

  return (
    <div className="flex flex-col items-center">
      <SearchForm formAction={formAction} />
      {/* <SearchResults productsPromise={productsPromise} /> */}
      <SearchResults products={state.products} />
      <Instructions path="/search.md" />
    </div>
  );
};

export default Search;
