# 🛍️ ShopHub E-commerce Frontend

A fully responsive, SEO-optimized e-commerce frontend built with **Next.js App Router**, **Redux Toolkit**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Setup Guide

1. **Clone the repository**
   ```bash
    git clone https://github.com/your-username/shophub-frontend.git
    cd shophub-frontend
   ```
2. **Install Dependencies**
```bash
npm install
```
3. **Start Development Server**
```bash
npm run dev
```
4. **Build for Production**
```bash
npm run build
npm start
```
---

## ⚙️ Features & Logic

- ✅ Product list with filtering  
- ✅ Product detail with “Add to Cart”  
- ✅ Cart and Checkout page with form  
- ✅ Order summary and order detail  
- ✅ Payment method and shipping info (mocked)  
- ✅ Redux Toolkit used for cart & order state  
- ✅ Static generation (SSG) using `getStaticProps` & `getStaticPaths`  
- ✅ SEO-optimized meta tags on every page  

## 🔍 SEO Techniques Used

- ✅ Dynamic `<title>` and `<meta description>` per page using `metadata` and `generateMetadata` in App Router  
- ✅ Custom `robots.txt` and `sitemap.xml` in `public/` folder  
- ✅ Semantic HTML (`<main>`, `<section>`, etc.)  
- ✅ All images have descriptive `alt` attributes  
- ✅ Clean, crawlable URLs (e.g., `/product/5`, `/orders`, `/order/123`)  
- ✅ Lighthouse-optimized performance and accessibility  

---

## 🗂️ Example Meta Setup

### 🛍️ Product List Page

```ts
export const metadata = {
  title: "ShopHub | Products",
  description: "Discover a wide range of high-quality products tailored to your needs. Browse categories, compare prices, and find your perfect pick all in one place.",
};
```

### 📄 Product Detail Page
```ts
export async function generateMetadata({ params }) {
  const product = await getProduct(Number(params.id));
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }
  return {
    title: product.title,
    description: product.description,
  };
}
```

## 🧾 Example `robots.txt`

**File:** `public/robots.txt`

```makefile
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```
## 🧭 Example sitemap.xml
**File:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2025-08-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/products</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
 
</urlset>
```

## 📧 Author

**Md Asraful Islam**  
📧 [asrafulislam.dev23@gmail.com](mailto:asrafulislam.dev23@gmail.com)