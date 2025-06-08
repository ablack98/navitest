
import { useRouter } from 'next/router';

export default function Intent() {
  const router = useRouter();

  const handleIntent = (intent) => {
    localStorage.setItem('navi_intent', intent);
    router.push('/tone');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#FAFAF7', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>What would you like support with today?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {['Feeling overwhelmed', 'Clarity on something', 'Working through a challenge', 'Building self-awareness', 'Just need to talk'].map((item) => (
          <button
            key={item}
            onClick={() => handleIntent(item)}
            style={{ padding: '0.75rem 1.5rem', borderRadius: '20px', backgroundColor: '#6BA292', color: '#fff', fontSize: '1rem', border: 'none', cursor: 'pointer', width: '80%', maxWidth: '400px' }}
          >
            {item}
          </button>
        ))}
        <textarea placeholder="Or something else?" onBlur={(e) => handleIntent(e.target.value)} style={{ width: '80%', maxWidth: '400px', borderRadius: '12px', padding: '1rem', marginTop: '1rem', fontSize: '1rem' }} />
      </div>
    </div>
  );
}
