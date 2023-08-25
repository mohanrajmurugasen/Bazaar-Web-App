import ProductFilter from "./ProductFilter";

async function getDatass() {
  const response = await fetch(
    "https://api.unsplash.com/search/photos?page=1&query=fruits&client_id=mKOKSCK-Xmx2T1I44qL36pwccOQa_0ZmdXbC4A_E1kc"
  );

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const repos = await response.json();

  return repos;
}

export default async function AllProducts() {
  const productLists = await getDatass();

  return (
    <div className="bg-white">
      <ProductFilter productLists={productLists.results} />

      {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <AllProductList productLists={productLists.results} />
        </div> */}
    </div>
  );
}
