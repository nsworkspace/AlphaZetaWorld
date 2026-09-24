type Props = {
  title: string;
  description: string;
  category: string;
  icon: string;
};

export default function ProductCard({ title, description, category, icon }: Props) {
  return (
    <article className="product-card">
      <div className="product-icon">{icon}</div>
      <span className="eyebrow">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="text-link">Explore product →</button>
    </article>
  );
}