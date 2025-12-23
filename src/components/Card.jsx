import { Link } from 'react-router-dom'

function Card({ id, name, url, description, imageURL }) {
  return (
    <article className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0, border: 'none' }}>
      <Link to={`/creator/${id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
        <div style={{ 
          height: '200px', 
          backgroundImage: `url(${imageURL})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)' 
        }}></div>
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{name}</h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {description}
          </p>
        </div>
      </Link>
      <footer style={{ padding: '1rem 1.5rem', display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
        <a role="button" href={url} target="_blank" rel="noopener noreferrer" className="outline secondary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem' }}>
          Channel
        </a>
        <Link to={`/edit/${id}`} role="button" className="outline contrast" style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>
          Edit
        </Link>
      </footer>
    </article>
  )
}

export default Card