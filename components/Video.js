import Image from 'next/image';

const Video = ({ video }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <Image src={video.thumbnail} alt={video.title} width={300} height={200} />
      <h2 className="text-lg font-bold">{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default Video;