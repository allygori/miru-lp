import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ImgProduct from "@/public/assets/img/products/aec789fff3e7c8669993d76d20d6a969.jpg";

type Props = {
  name?: string;
  image_url?: string | StaticImageData;
};

const ProductOne = ({ name, image_url = ImgProduct }: Props) => {
  return (
    <Link href="/" className="flex flex-col flex-wrap shadow">
      <Image src={image_url} alt="Product" width={600} height={600} />
      <div className="mb-4 flex flex-col p-2">
        <h2
          title=""
          className="mb-2 line-clamp-2 min-h-[2.5rem] break-words text-sm"
        >
          MISTYVORI | Hera Long Tunik Kerah Vneck Bahan Poplin Premium
        </h2>
        <div className="flex flex-row items-center">
          {/* price */}
          <div className="flex flex-row items-baseline">
            <span className="text-xs font-medium text-orange-500">Rp</span>
            <span className="text-base font-medium text-orange-500">
              219.000
            </span>
          </div>
          {/* discount price */}
          <div className="mx-1 flex flex-shrink flex-grow-0 flex-row items-center truncate text-zinc-400 line-through">
            <span className="text-xs font-light">Rp</span>
            <span className="text-xs font-light">259.000</span>
          </div>
          {/* discount precentage */}
          <div className="bg-red-100 px-1 py-0.5 text-2xs font-semibold">
            <span className="text-red-400">-15%</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductOne;
