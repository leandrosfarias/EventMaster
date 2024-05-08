import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao EventMaster!</h1>
      <p className="mt-2 text-gray-700">Gerenciamento de eventos online feito fácil.</p>
      <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        Inscreva-se Agora
      </button>
    </main>
  );
}
