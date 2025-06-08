
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: '5rem', fontFamily: 'sans-serif', backgroundColor: '#F9F9F6', height: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Welcome to Navi</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
        Your safe, calm space for reflection, journaling, and support.
      </p>
      <div>
        <button onClick={() => router.push('/intent')} style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#6BA292', color: '#fff', cursor: 'pointer' }}>
          Try Navi for Free
        </button>
        <button onClick={() => router.push('/chat')} style={{ padding: '1rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#E3EAE7', color: '#333', cursor: 'pointer' }}>
          Continue My Journey
        </button>
      </div>
    </div>
  );
}
