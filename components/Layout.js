
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-white shadow p-4 flex space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Hjem</Link>
        <Link href="/om" className="text-blue-600 hover:underline">Om Elråd</Link>
        <Link href="/priser" className="text-blue-600 hover:underline">Priser</Link>
        <Link href="/kontakt" className="text-blue-600 hover:underline">Kontakt oss</Link>
      </nav>
      <main className="mt-6 max-w-3xl mx-auto">
        {children}
      </main>
      <footer className="bg-gray-100 text-center p-6 mt-10">
        <h2 className="text-xl font-bold">Vil du at vi skal kontakte deg?</h2>
        <p className="text-sm mt-2">
          Om ikke svaret fra vår AI-kundesupport løste problemet, så kan vår menneskelige kompetanse bistå med problemløsing eller eventuelt ett prisestimat for utbedring av feil.
        </p>
      </footer>
    </div>
  )
}
