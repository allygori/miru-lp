import Image from "next/image";

import ImageCoworking from "@/public/assets/img/hero/coworking.jpg";

const CoworkingSpace = () => {
  return (
    <section className="bg-white min-h-screen min-w-full">
      <div className="flex flex-row items-center justify-between">
        <div>Text HERE</div>
        <div>
          <Image
            src={ImageCoworking}
            alt="coworking space"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CoworkingSpace;
