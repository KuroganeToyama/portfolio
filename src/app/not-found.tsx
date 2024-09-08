export default function NotFound() {
    return (
      <>
        <div className="relative z-[0] min-h-screen w-[85%] mx-auto aspect-video ">
          <div className="bg-yellow-300">
            <h1
              className="absolute p-8 rounded-lg left-0 right-0 bottom-0 top-0 m-auto 
                  font-extrabold leading-none tracking-tight 
                  text-center backdrop-blur-sm z-[1] h-fit w-fit"
            >
              <span className="block text-green-500 md:text-[100px] text-9xl mb-8">404 Page Not Found</span>
              <span className="block text-gray-800 md:text-[20px] text-9xl mb-8">Most likely because I forgot something, if we don't consider the internet.</span>
              <span className="block text-gray-800 md:text-[20px] text-9xl mb-8">Could also be Vercel doing something not right.</span>
              <a href="/" className="text-md">
                <button
                  className="text-md bg-zinc-800 rounded-md p-6 transition-transform 
                hover:scale-105 hover:bg-green-300 hover:text-zinc-900"
                >
                  Return Home
                </button>
              </a>
            </h1>
          </div>
        </div>
      </>
    );
}