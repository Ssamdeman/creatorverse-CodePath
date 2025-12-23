import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import { Link } from 'react-router-dom'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()
      
      setCreator(data)
    }

    fetchCreator()
  }, [id])

  if (!creator) return <div className="container" aria-busy="true">Loading...</div>

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <article className="glass-panel">
        <header style={{ textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
          {creator.imageURL && (
            <img 
              src={creator.imageURL} 
              alt={creator.name} 
              style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                marginBottom: '1rem'
              }} 
            />
          )}
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{creator.name}</h1>
          <a role="button" href={creator.url} target="_blank" rel="noopener noreferrer" className="outline">
            Visit Channel
          </a>
        </header>
        <div style={{ padding: '2rem' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{creator.description}</p>
        </div>
        <footer style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
           <Link to="/" role="button" className="secondary outline">Back</Link>
           <Link to={`/edit/${id}`} role="button" className="contrast">Edit Creator</Link>
        </footer>
      </article>
    </div>
  )
}

export default ViewCreator