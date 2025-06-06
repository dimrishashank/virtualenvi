import React from "react";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Explore Further: Dive into the Metaverse!",
    desc: "Explore the Metaverse! It's a new world, full of possibilities. Learn what it is & how you can also join the adventure.",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "Metaverse for Everyone: Break Digital Barriers!",
    desc: "Metaverse isn't just for gamers! See how it breaks down barriers & help people to connect in the virtual world.",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Redefining Work, Learn and Play Experiences at VE!",
    desc: "Reimagine work, learning & play in the Metaverse. Learn how it can transform experiences!",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "How the Metaverse is growing in Fashion Industry",
    desc: "Dress for the Metaverse! Explore virtual fashion and how it shapes the future of style.",
  },
];

function BlogCardsSection() {
  return (
    <section className="ve-blog-section">
      <div className="ve-blog-cards-container">
        {cards.map((card, idx) => (
          <div className="ve-blog-card" key={idx}>
            <img src={card.image} alt={card.title} className="ve-blog-card-img" />
            <div className="ve-blog-card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogCardsSection;