import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ImgProduct from "@/public/assets/img/product/aec789fff3e7c8669993d76d20d6a969.jpg";

type Props = {
  name?: string;
  image_url?: string | StaticImageData;
};

const ProductOne = ({ name, image_url = ImgProduct }: Props) => {
  return (
    <Link href="/" className="flex flex-wrap flex-col shadow">
      <Image src={image_url} alt="Product" width={600} height={600} />
      <div className="flex flex-col p-2 mb-4">
        <h2
          title=""
          className="line-clamp-2 break-words min-h-[2.5rem] text-sm mb-2"
        >
          MISTYVORI | Hera Long Tunik Kerah Vneck Bahan Poplin Premium
        </h2>
        <div className="flex flex-row items-center">
          {/* price */}
          <div className="flex flex-row items-baseline">
            <span className="text-xs text-orange-500 font-medium">Rp</span>
            <span className="text-base text-orange-500 font-medium">
              219.000
            </span>
          </div>
          {/* discount price */}
          <div className="flex flex-row flex-grow-0 flex-shrink items-center text-zinc-400 truncate line-through mx-1">
            <span className="text-xs font-light">Rp</span>
            <span className="text-xs font-light">259.000</span>
          </div>
          {/* discount precentage */}
          <div className="text-2xs font-semibold px-1 py-0.5 bg-red-100">
            <span className="text-red-400">-15%</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductOne;
