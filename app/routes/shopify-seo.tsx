import { json } from "@remix-run/node";

export const loader = async () => {
  return json({ message: "Shopify SEO API is working!" });
};

export default function ShopifySEO() {
  return <div>Shopify SEO Page</div>;
}
