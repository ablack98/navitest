
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  const router = useRouter();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('journal_entries') || '[]');
    setEntries(saved);
  }, []);

  const saveEntry = () => {
    if (!entry.trim()) return;
    const updated = [...entries, { content: entry, date: new Date().toLocaleDateString() }];
    setEntries(updated);
    setEntry('');
    localStorage.setItem('journal_entries', JSON.stringify(updated));
  };

  const deleteEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    localStorage.setItem('journal_entries', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#FAF9F6', minHeight: '100vh' }}>
      <h1 style={{ color: '#6BA292', textAlign: 'center', cursor: 'pointer' }} onClick={() => router.push('/')}>Navi Journal</h1>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write about your thoughts, gratitude, or intentions..."
        style={{ width: '100%', height: '100px', padding: '1rem', marginTop: '1rem', borderRadius: 8 }}
      />
      <button onClick={saveEntry} style={{ marginTop: '0.5rem', backgroundColor: '#6BA292', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: 6 }}>Save Entry</button>

      <div style={{ marginTop: '2rem' }}>
        {entries.map((e, i) => (
          <div key={i} style={{ background: '#fff', padding: '1rem', borderRadius: 8, marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '0.9rem', color: '#999' }}>{e.date}</div>
            <div>{e.content}</div>
            <button onClick={() => deleteEntry(i)} style={{ marginTop: '0.5rem', fontSize: '0.8rem', background: '#E57373', color: 'white', border: 'none', borderRadius: 4, padding: '0.3rem 0.6rem' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
