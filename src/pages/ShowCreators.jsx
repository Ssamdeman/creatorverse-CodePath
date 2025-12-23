import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
      
      setCreators(data)
    }

    fetchCreators()
  }, [])

  return (
    <div className="container">
      <section className="hero">
        <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem', letterSpacing: '0.1em', color: 'white' }}>CREATORVERSE</h1>
        <div role="group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
           <a role="button" href="#creators" className="outline">View All Creators</a>
           <a role="button" href="/new">Add a Creator</a>
        </div>
      </section>
      
      <div id="creators" className="grid-container">
        {creators && creators.length > 0 ? (
          creators.map((creator) => (
            <Card 
              key={creator.id}
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))
        ) : (
          <article className="glass-panel" style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            <p>No creators yet. Be the first to add one!</p>
            <a role="button" href="/new">Add Creator</a>
          </article>
        )}
      </div>
    </div>
  )
}

export default ShowCreators