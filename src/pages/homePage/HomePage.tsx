/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Post from '../../components/Post';

const HomePage = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch('https://zexkx72ghe.execute-api.us-east-1.amazonaws.com/dev/v1/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
  // const posts = await fetch('https://zexkx72ghe.execute-api.us-east-1.amazonaws.com/dev/v1/posts');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {posts.map((post: { author: string; likes: number; image: string }) => (
        <Post name={post.author} likes={post.likes} image={post.image} />
      ))}
    </div>
  );
};

export default HomePage;
