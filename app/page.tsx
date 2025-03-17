import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Concessionária de Carros - FIAP </h1>
      <Link href="/listaCarros">
        <button>Lista de Carros</button>
      </Link>
    </div>
  );
}