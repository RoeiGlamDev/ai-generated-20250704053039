import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getVideos } from '../lib/firebase';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos();
      setVideos(data);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <Head>
        <title>Luxury Video App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center mb-4">
        <Link href="/">
          <a>
            <Image src="https://images.pexels.com/photos/193777/pexels-photo-193777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Logo" width={100} height={100} />
          </a>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/trending">
                <a>Trending</a>
              </Link>
            </li>
            <li>
              <Link href="/subscriptions">
                <a>Subscriptions</a>
              </Link>
            </li>
            <li>
              <Link href="/library">
                <a>Library</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                <Image src={video.thumbnail} alt={video.title} width={300} height={200} />
                <h2 className="text-lg font-bold">{video.title}</h2>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}