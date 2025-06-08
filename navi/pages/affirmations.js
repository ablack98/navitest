
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const affirmations = [
  "You are strong and capable.",
  "Each day is a new opportunity.",
  "You are worthy of good things.",
  "You are grounded, calm, and centered.",
  "Your journey matters."
];

export default function Affirmations() {
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('fav_affirmations') || '[]');
    setFavorites(saved);
  }, []);

  const toggleFavorite = (text) => {
    let updated = [];
    if (favorites.includes(text)) {
      updated = favorites.filter((f) => f !== text);
    } else {
      updated = [...favorites, text];
    }
    setFavorites(updated);
    localStorage.setItem('fav_affirmations', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#FDFCF9', minHeight: '100vh' }}>
      <h1 style={{ color: '#6BA292', textAlign: 'center', cursor: 'pointer' }} onClick={() => router.push('/')}>Navi Affirmations</h1>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>{affirmations[index]}</div>
        <button onClick={() => setIndex((index + 1) % affirmations.length)} style={{ marginRight: 8 }}>Next</button>
        <button onClick={() => toggleFavorite(affirmations[index])}>
          {favorites.includes(affirmations[index]) ? '💛 Unsave' : '🤍 Save'}
        </button>
      </div>
      {favorites.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Your Favorites</h3>
          {favorites.map((fav, i) => (
            <div key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>{fav}</div>
          ))}
        </div>
      )}
    </div>
  );
}
