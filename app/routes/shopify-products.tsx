import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  const shopifyStore = "test-store-ilker.myshopify.com";
  const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
  
  const productId = "9647948726536"; // Replace with a real product ID
  const seoTitle = "Top-Rated Wireless Bluetooth Headphones - Superior Bass & Wireless Freedom";
  const seoDescription = "Discover the best Electronics with Wireless Bluetooth Headphones! Featuring advanced noise cancellation, deep bass, and a long-lasting battery.";

  const response = await fetch(`https://${shopifyStore}/admin/api/2024-01/products/${productId}.json`, {
    method: "PUT",
    headers: {
      "X-Shopify-Access-Token": accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: {
        id: productId,
        title: seoTitle,
        body_html: seoDescription
      }
    }),
  });

  const data = await response.json();
  return json(data);
};
