// import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import CardHome from "@/components/card-home";
import Carrusel from "@/components/ui/carrusel";
import UbicacionHome from "@/components/ubicacion";
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard("831062b2-d1da-43b3-a601-5dcc280447b1");

  return (
    <Container>
      < div className="  ">
        <Billboard /> 

        <div className="flex flex-col gap-y-8 px-4  sm:px-6 lg:px-8 w-auto m-auto ">
          <Carrusel/>
          <ProductList title="Productos Recomendados" items={products} />
        </div>
        
        <CardHome />
        <UbicacionHome/>
        
      </div>
    </Container>
  );
};

export default HomePage;
