import React, { useEffect, useState } from 'react';
import axios from './API';
import './Axios.css'

const Axios = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/posts")
      .then(function (response) {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }, []);

    return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h1>Posts</h1>
          <div className='grid'>
            {posts.slice(0,15).map(post => (
              <div className='grid-item' key={post.id}>
                <h2>{post.title.slice(0,15)}</h2>
                <p>{post.body.slice(0,80)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Axios;
