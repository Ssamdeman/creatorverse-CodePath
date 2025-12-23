import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()
      
      setFormData(data)
    }

    fetchCreator()
  }, [id])

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
      .update(formData)
      .eq('id', id)
    
    navigate('/')
  }

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this creator?");
    if (confirm) {
      await supabase
        .from('creators')
        .delete()
        .eq('id', id)
      
      navigate('/')
    }
}

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '2rem' }}>
      <article className="glass-panel">
        <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
          <h2>Edit Creator</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="Channel URL"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Description"
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
              placeholder="Image URL"
              value={formData.imageURL}
              onChange={handleChange}
            />
          </label>
          
          <div className="grid">
            <Link to="/" role="button" className="secondary outline">Cancel</Link>
            <button type="button" className="outline danger" onClick={handleDelete} style={{ borderColor: '#ef4444', color: '#ef4444' }}>Delete</button>
            <button type="submit">Update Creator</button>
          </div>

        </form>
      </article>
    </div>
  )
}

export default EditCreator