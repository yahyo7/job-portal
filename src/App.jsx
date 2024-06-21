import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards/>
      
      {/* <!-- Browse Jobs --> */}
      <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            <div class="bg-white rounded-xl shadow-md relative">
              <div class="p-4">
                <div class="mb-6">
                  <div class="text-gray-600 my-2">Full-Time</div>
                  <h3 class="text-xl font-bold">Senior React Developer</h3>
                </div>

                <div class="mb-5">
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript...
                </div>

                <h3 class="text-indigo-500 mb-2">$70 - $80K / Year</h3>

                <div class="border border-gray-100 mb-5"></div>

                <div class="flex flex-col lg:flex-row justify-between mb-4">
                  <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    Boston, MA
                  </div>
                  <a
                    href="job.html"
                    class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 2 --> */}
            <div class="bg-white rounded-xl shadow-md relative">
              <div class="p-4">
                <div class="mb-6">
                  <div class="text-gray-600 my-2">Remote</div>
                  <h3 class="text-xl font-bold">Front-End Engineer (React)</h3>
                </div>

                <div class="mb-5">
                  Join our team as a Front-End Developer in sunny Miami, FL. We
                  are looking for a motivated individual with a passion...
                </div>

                <h3 class="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div class="border border-gray-100 mb-5"></div>

                <div class="flex flex-col lg:flex-row justify-between mb-4">
                  <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                  </div>
                  <a
                    href="job.html"
                    class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 3 --> */}
            <div class="bg-white rounded-xl shadow-md relative">
              <div class="p-4">
                <div class="mb-6">
                  <div class="text-gray-600 my-2">Remote</div>
                  <h3 class="text-xl font-bold">React.js Developer</h3>
                </div>

                <div class="mb-5">
                  Are you passionate about front-end development? Join our team
                  in vibrant Brooklyn, NY, and work on exciting projects that
                  make a difference...
                </div>

                <h3 class="text-indigo-500 mb-2">$70K - $80K / Year</h3>

                <div class="border border-gray-100 mb-5"></div>

                <div class="flex flex-col lg:flex-row justify-between mb-4">
                  <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    Brooklyn, NY
                  </div>
                  <a
                    href="job.html"
                    class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
