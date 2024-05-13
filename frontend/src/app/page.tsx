import ProducList from "@/components/products/productList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Kits Armables</h1>
      <ProducList />
    </main>
  );
}
