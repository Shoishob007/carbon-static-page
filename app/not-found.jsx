import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div 
              className="h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)'
              }}
              aria-hidden
            >
              <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8">
                404
              </h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                Looks like you're lost
              </h3>
              <p className="mb-6 sm:mb-5 text-gray-600">
                The page you are looking for is not available!
              </p>

              <Link 
                href="/coming-soon"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}