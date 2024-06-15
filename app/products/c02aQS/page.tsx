import Container from "@/app/components/general/container";
import Images from "./components/sections/images";
import Price from "./components/sections/price";
import Guarantee from "./components/sections/guarantee";
import Description from "./components/sections/description";

// type Props = {
//   className?: string | undefined;
// };

const Page = () => {
  return (
    <main>
      <Container
        className={`w-full md:w-10/12 lg:w-7/12 xl:w-5/12`}
        classObject={{ padding: "px-0 md:px-5" }}
      >
        {/* section:images */}
        <Images />
      </Container>
      {/* section:price */}
      <Price className="mb-2 mt-4" />

      {/* section:product-name */}
      <section className="mb-6">
        <Container
          className={`w-full md:w-10/12 lg:w-7/12 xl:w-5/12`}
          classObject={{ padding: "px-3 md:px-5" }}
        >
          <h1 className="m-0 text-sm font-normal">
            Hana Dress Pakaian Simple Dress Muslimah Polos
          </h1>
        </Container>
      </section>

      {/* section:guarantee */}
      <Guarantee className="mb-6" />

      {/* section:description */}
      <Description />
    </main>
  );
};

export default Page;
