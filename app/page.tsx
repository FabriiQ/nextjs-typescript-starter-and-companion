import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  redirect('/protected');
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4">
          <h2>Memories</h2>
          {/* Add content for the Memories panel here */}
        </div>
        <div className="w-3/4 p-4">
          <h1>Welcome to the Next.js + Postgres Auth Starter</h1>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
