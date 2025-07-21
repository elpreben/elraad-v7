
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Hva kan vi hjelpe deg med?</h1>
      <form className="mt-8 space-y-4">
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700">Beskriv problemet:</label>
        <textarea id="problem" name="problem" rows="4" className="w-full border rounded-md p-2"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send inn</button>
      </form>
    </Layout>
  )
}
