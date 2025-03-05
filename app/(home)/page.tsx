import Link from 'next/link';
import { blog } from '@/lib/source';

const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

export default function HomePage() {

  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="md:rounded-t-xl md:w-[80%] w-full h-[250px] md:h-[300px] md:p-14 p-10 md:mt-10"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 0% 10%, rgba(20, 20, 20, 0.9), transparent)', 
            'radial-gradient(circle at 80% 50%, rgba(50, 50, 50, 0.4), transparent)',
            'radial-gradient(circle at 0% 50%, rgba(100, 100, 100, 0.9), transparent)', 
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
        ].join(', ')        
        }}>
          <h1 className="mb-4 border-b-3 border-fd pb-2 text-4xl font-bold md:text-5xl text-white">
            Jeongdo Park
          </h1>
        </div>
        <div className="md:w-[80%] w-full grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">
              {post.data.description}
            </p>

            <p className="mt-auto pt-4 text-xs text-fd-muted-foreground">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
