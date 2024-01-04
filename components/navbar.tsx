import Link from "next/link";

import MainNav from "@/components/archivo-sin-uso-nav-main-delete";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import NavbarTopBarPreview from "./nav-pru";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
      <NavbarTopBarPreview/>
      </Container>
    </div>
  );
};
 
export default Navbar;
{/*         <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">


        </div> */}