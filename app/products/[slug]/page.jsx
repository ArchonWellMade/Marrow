import Link from 'next/link';
import { notFound } from 'next/navigation';
import Newsletter from '@/components/Newsletter';
import ProductGallery from '@/components/ProductGallery';
import QuantityAndBuy from '@/components/QuantityAndBuy';
import { getProduct, getRelated, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: 'Not found — Marrow' };
  return {
    title: `${p.title} — Marrow`,
    description: p.description[0],
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(product);

  return (
    <>
      <nav className="crumbs" style={{ marginTop: 32 }}>
        <Link href="/">Home</Link><span>/</span>
        <Link href={`/selection?cat=${product.categorySlug}`}>{product.category}</Link>
        <span>/</span>{product.title}
      </nav>

      <section className="product">
        <ProductGallery image={product.image} title={product.title} />

        <div className="product-info">
          <div className="category">{product.tagline}</div>
          <h1>{product.title}</h1>
          <div className="price">{product.price} <small>{product.unit}</small></div>

          {product.description.map((para, i) => (
            <p key={i} className="desc">{para}</p>
          ))}

          <ul className="specs">
            {product.specs.map(([label, value]) => (
              <li key={label}>
                <span className="label">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>

          <QuantityAndBuy />

          <div className="product-meta">
            <span>Cut and prepared to order</span>
            <span>Pickup at the shop or local courier delivery</span>
            <span>Vacuum-sealed for transport</span>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related">
          <h2>You may also like</h2>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} className="related-card" href={`/products/${r.slug}`}>
                <img src={r.image} alt={r.title} />
                <div className="label">
                  <h3>{r.title}</h3>
                  <div className="tag">{r.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
