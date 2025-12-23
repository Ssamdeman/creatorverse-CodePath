import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate, Link } from 'react-router-dom'

function AddCreator() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await supabase
      .from('creators')
      .insert([formData])
    
    navigate('/')
  }

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '2rem' }}>
      <article className="glass-panel">
        <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
          <h2>Add New Creator</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="e.g. Marques Brownlee"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Channel URL
            <input
              type="url"
              name="url"
              placeholder="https://youtube.com/..."
              value={formData.url}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Tell us about this creator..."
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
            />
          </label>
          <label>
            Image URL (Optional)
            <input
              type="url"
              name="imageURL"
              placeholder="https://..."
              value={formData.imageURL}
              onChange={handleChange}
            />
          </label>
          <div className="grid">
            <Link to="/" role="button" className="secondary outline">Cancel</Link>
            <button type="submit">Add Creator</button>
          </div>
        </form>
      </article>
    </div>
  )
}

export default AddCreator