'use client'; 

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'sans-serif', padding: '100px', textAlign: 'center', background: '#fafafa' }}>
        <h1 style={{ color: '#e11d48' }}>Произошла критическая системная ошибка 🚨</h1>
        <p>Нам очень жаль, но что-то пошло совсем не так на уровне всего приложения.</p>
        
        <button 
          onClick={() => reset()}
          style={{ padding: '12px 24px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '20px' }}
        >
          Перезапустить интерфейс
        </button>
      </body>
    </html>
  );
}