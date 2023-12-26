// import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import CardHome from "@/components/card-home";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard("831062b2-d1da-43b3-a601-5dcc280447b1");

  return (
    <Container>
      <div className="space-y-10 pb-10">
         <Billboard /> 
        <div className="flex flex-col gap-y-8 px-4  sm:px-6 lg:px-8 max-w-7xl m-auto ">
          <ProductList title="Productos Recomendados" items={products} />
        </div>
        <CardHome />
      </div>
    </Container>
  );
};

export default HomePage;
