import Image from "next/image";
import IconBank from "@/public/assets/img/icons/bank_8215523-128.png";
import IconShield from "@/public/assets/img/icons/shield_8215759-128.png";
import IconBriefcase from "@/public/assets/img/icons/briefcase_8215532-128.png";
import IconBubleChat from "@/public/assets/img/icons/bubble-chat_8215537-128.png";

const Benefits = () => {
  return (
    <section>
      <ul className="m-0 p-0 flex flex-wrap flex-row -mx-2">
        <li className="flex-1 p-8 m-2 bg-sea-mist-25 rounded-xl">
          {/* icon */}
          <Image
            src={IconBriefcase}
            alt="Icon bank"
            width={38}
            height={38}
            quality={100}
            className="mb-4"
          />
          <h3 className="font-semibold mb-4 text-xl">
            Make studen refunds hassle-free
          </h3>
          <p className="text-md text-zinc-600">
            Give students simple, mobile initiated refunds with Bulk refund
            uploads and easy reconciliation via ERP integration to increase
            operational efficiency
          </p>
        </li>
        <li className="flex-1 p-8 m-2 bg-sea-mist-25 rounded-xl">
          {/* icon */}
          <Image
            src={IconShield}
            alt="Icon bank"
            width={38}
            height={38}
            quality={100}
            className="mb-4"
          />
          <h3 className="font-semibold mb-4 text-xl">
            Make studen refunds hassle-free
          </h3>
          <p className="text-md text-zinc-600">
            Give students simple, mobile initiated refunds with Bulk refund
            uploads and easy reconciliation via ERP integration to increase
            operational efficiency
          </p>
        </li>
        <li className="flex-1 p-8 m-2 bg-sea-mist-25 rounded-xl">
          {/* icon */}
          <Image
            src={IconBank}
            alt="Icon bank"
            width={38}
            height={38}
            quality={100}
            className="mb-4"
          />
          <h3 className="font-semibold mb-4 text-xl">
            Make studen refunds hassle-free
          </h3>
          <p className="text-md text-zinc-600">
            Give students simple, mobile initiated refunds with Bulk refund
            uploads and easy reconciliation via ERP integration to increase
            operational efficiency
          </p>
        </li>
        <li className="flex-1 p-8 m-2 bg-sea-mist-25 rounded-xl">
          {/* icon */}
          <Image
            src={IconBubleChat}
            alt="Icon bank"
            width={38}
            height={38}
            quality={100}
            className="mb-4"
          />
          <h3 className="font-semibold mb-4 text-xl">
            Make studen refunds hassle-free
          </h3>
          <p className="text-md text-zinc-600">
            Give students simple, mobile initiated refunds with Bulk refund
            uploads and easy reconciliation via ERP integration to increase
            operational efficiency
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
