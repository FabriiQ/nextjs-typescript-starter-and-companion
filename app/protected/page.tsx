import { auth, signOut } from 'app/auth';
import ChatbotUI from '../companion/page'; // Adjust the import path if necessary

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        <h1>You are logged in as {session?.user?.email}</h1>
        <SignOut />
        <div className="w-full max-w-4xl">
          <ChatbotUI />
        </div>
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}