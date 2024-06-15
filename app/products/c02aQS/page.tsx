import Images from "./components/sections/images";
import Container from "@/app/components/general/container";

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
        <Images />
      </Container>
    </main>
  );
};

export default Page;
