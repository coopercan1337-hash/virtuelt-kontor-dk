import './index.css'
import CookieConsent from './CookieConsent'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-orange-600">Kontor-Adressen.dk</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-orange-600 transition-colors">Forside</a>
            <a href="#fordele" className="hover:text-orange-600 transition-colors">Fordele</a>
            <a href="#sammenlign" className="hover:text-orange-600 transition-colors">Sammenlign</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Professionel firmaadresse uden dyre lokaler
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Få et virtuelt kontor i København og giv din virksomhed det rette image. Perfekt til startups og fjernarbejdere.
          </p>
          <a 
            href="#sammenlign" 
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Se priser →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Comparison Section */}
        <section id="sammenlign" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Bedste udbydere af virtuelt kontor</h2>
            <p className="text-gray-600 mb-8">Opdateret Februar 2026 - Sammenlign priser og services</p>
            
            <div className="space-y-6">
              {/* Provider 1 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">VirtueltKontor.dk</h3>
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">Markedsleder</span>
                  </div>
                  <p className="text-gray-600 mb-2">Danmarks førende udbyder af erhvervsadresser og virtuelle kontorer.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Adresse i København centrum</li>
                    <li>✓ Posthåndtering inkluderet</li>
                    <li>✓ Mødebooking muligt</li>
                    <li>✓ Telefonsvar tilkøb</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-2xl font-bold text-orange-600 mb-1">Fra 299 DKK</span>
                  <span className="block text-sm text-gray-500 mb-3">pr. måned</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=12491&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                  >
                    Se priser →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="fordele" className="mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Fordele ved virtuelt kontor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Et <strong>virtuelt kontor</strong> giver dig en professionel erhvervsadresse uden de store omkostninger ved fysiske lokaler. Det er den perfekte løsning for startups, freelancere og virksomheder der arbejder remote.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">💼 Professionelt image</h3>
                <p className="text-gray-700">En adresse i København centrum giver troværdighed hos kunder og samarbejdspartnere.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">💰 Spar penge</h3>
                <p className="text-gray-700">Undgå dyre kontorlejekontrakter. Betal kun for det du har brug for.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">📬 Posthåndtering</h3>
                <p className="text-gray-700">Modtag post og pakker professionelt. Få besked eller videresendelse.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">🌍 Arbejd hvor som helst</h3>
                <p className="text-gray-700">Perfekt til digital nomads og fjernarbejde. Din adresse er fast, men du er fleksibel.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Hvem bruger virtuelt kontor?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Startups</strong> - Professionelt image fra dag ét uden store investeringer</li>
              <li>• <strong>Freelancere</strong> - Undgå at bruge privatadressen til erhverv</li>
              <li>• <strong>Udenlandske virksomheder</strong> - Dansk adresse til det danske marked</li>
              <li>• <strong>E-commerce</strong> - Troværdig returadresse til kunder</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Hvad inkluderer et virtuelt kontor?</h3>
            <p className="text-gray-700 leading-relaxed">
              De fleste pakker inkluderer en <strong>erhvervsadresse</strong> du kan bruge på hjemmeside, visitkort og fakuraer. Hertil kommer ofte <strong>posthåndtering</strong> hvor de modtager og scanner eller videresender din post. Mange tilbyder også <strong>mødelokaler</strong> på timebasis og <strong>telefonpasning</strong>.
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Kan jeg registrere virksomhed på adressen?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, du kan bruge adressen som officiel c/o-adresse i CVR-registret. Tjek dog altid med udbyderen at dette er inkluderet.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvad sker der med min post?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Post modtages og du får typisk besked via app eller email. Du kan vælge at hente den, få den scannet eller videresendt til din adresse.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Er det lovligt at bruge virtuelt kontor?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, det er helt lovligt. Mange tusinde danske virksomheder bruger virtuelle kontorer. Det vigtige er at du har en reel aftale om brug af adressen.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Kontor-Adressen.dk</h4>
              <p className="text-sm">
                Vi hjælper dig med at finde det perfekte virtuelle kontor i Danmark.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Forside</a></li>
                <li><a href="#fordele" className="hover:text-white transition-colors">Fordele</a></li>
                <li><a href="#sammenlign" className="hover:text-white transition-colors">Sammenlign</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privatlivspolitik" className="hover:text-white transition-colors">Privatlivspolitik</a></li>
                <li><a href="/om-os" className="hover:text-white transition-colors">Om os</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Kontor-Adressen.dk - Alle rettigheder forbeholdes</p>
            <p className="mt-2 text-gray-500">
              Denne side indeholder affiliate links. Vi modtager provision ved køb gennem vores links.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}

export default App
