import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Link href="/products/rNnrD6">
        http://192.168.165.165:3000/products/rNnrD6
      </Link>
      <Link href="/products/c02aQS">
        http://192.168.165.165:3000/products/c02aQS
      </Link>
    </div>
  );
}
