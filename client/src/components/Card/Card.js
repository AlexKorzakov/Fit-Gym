import './Card.css';

export const Card = ({ card_subtitle, src, children }) => {
  return (
    <div className="card">
      <div className="card_image_block">
        <img src={src} alt="card img" />
        <div className="card_description">{children}</div>
      </div>
      <div className="card_subtitle">
        <span>{card_subtitle}</span>
      </div>
    </div>
  );
};
