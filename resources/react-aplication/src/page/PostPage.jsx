import React, { useEffect, useState } from 'react'

const fetchAData = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();

  return json;

}

export const PostPage = () => {

  const [isLoading  , setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [postSelected, setPostSelected] = useState({
    userId: null,
    id: null,
    title: "",
    body: "",
  })
  

  useEffect(() => {
    
    fetchAData()
    .then((response) => setPosts(response))
    .finally( () => setIsLoading(false) )
    return () => {
      
    }
  }, [])

  const handleEdit = (post) => {
    setPostSelected(post)
  }
  
  const handleDeletePost = (post) => {

    const deletePost = posts.filter(p => p.id !== post.id);
    setPosts(deletePost)

  }

  const handleSubmitModifyPost = (e) => {
    e.preventDefault()

    
    console.log('modify', postSelected);

    const postModified = posts.map( p => {
      if (postSelected.id === p.id) {
          return postSelected
      }
      return p;
    })


    setPosts( postModified )

    postSelected({
      userId: null,
      id: null,
      title: "",
      body: "",
    })

  }

  const handleSubmitAddPost = (e) => {
    e.preventDefault()

    const { userId, id, ...rest } = postSelected
    const newPost = {
      userId: new Date().getMilliseconds(),
      id: new Date().getMilliseconds() + 1,
      ...rest
    }
    console.log('agregar', newPost);
    
    setPosts( prev => [newPost, ...prev])

    postSelected({
      userId: null,
      id: null,
      title: "",
      body: "",
    })
  }

  const handleOnChange = (e) => {

    setPostSelected( prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

  }


  return (
    <div>

      <h1>POSTS</h1>

      <section className='w-100 flex justify-content-between'>
        <ul >
          {
            isLoading
            ? <span>Loading...</span>
            : posts.map( (post) => (
              <li key={post.id} className="card">
                <div>
                  <span className="card-title">{post.title}</span>
                  <p className="card-body">{post.body}</p>
                </div>

                <div>
                  <button className='btn btn-danger' onClick={() => handleEdit(post)}>Modificar</button>
                  <button className='btn btn-danger' onClick={() => handleDeletePost(post)}>Eliminar</button>
                </div>

              </li>
            ))
          }
        </ul>
        <div>
          <span>amonos</span>
          
          {
                  postSelected
                  && 
                  <form onSubmit={
                      postSelected.id 
                      ? handleSubmitModifyPost 
                      : handleSubmitAddPost                      
                    } >
                    <input type="text" 
                    name="title" 
                    value={postSelected.title || ''}
                    onChange={handleOnChange}
                    placeholder="Title" />

                    <input type="text" 
                    name="body" 
                    value={postSelected.body || ''}
                    onChange={handleOnChange}
                    placeholder="Description" />
                    <button className='btn btn-dark'>
                      {
                        postSelected.id
                        ? 'Modificar'
                        : 'Agregar'
                      }
                    </button>
                  </form>
                }
        </div>
      </section>
      

    </div>
  )


}
