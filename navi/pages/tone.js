
import { useRouter } from 'next/router';

export default function Tone() {
  const router = useRouter();

  const handleTone = (tone) => {
    localStorage.setItem('navi_tone', tone);
    router.push('/chat');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#F4F4F4', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>What tone would you like from Navi today?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {['Soft & Supportive', 'Warm & Encouraging', 'Direct & Honest', 'Empowering Coach', 'Reflective & Thoughtful'].map((tone) => (
          <button
            key={tone}
            onClick={() => handleTone(tone.toLowerCase())}
            style={{ padding: '0.75rem 1.5rem', borderRadius: '20px', backgroundColor: '#E3EAE7', color: '#333', fontSize: '1rem', border: 'none', cursor: 'pointer', width: '80%', maxWidth: '400px' }}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
}
