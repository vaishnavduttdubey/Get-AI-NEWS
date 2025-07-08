import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <>
      <div className="relative mx-auto h-full w-full overflow-hidden pt-12 md:pt-0 lg:pt-0">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <main className="flex md:flex-row basis-1/2 md:gap-10 gap-3 flex-col items-center h-fit lg:h-[100vh] overflow-hidden">
          <section className="md:w-[50%] text-zinc-200 leading-7 tracking-wide flex flex-col gap-4 px-10 text-center md:text-left ">
            <h1 className="text-zinc-200 md:text-4xl text-2xl font-semibold leading-relaxed tracking-wide">
              Ace your next technical interview with confidence.
            </h1>
            <p>
              {" "}
              <a href="https://get-ai-news-chi.vercel.app/">
              Click here for {" "} 
                <span className="text-blue-500 font-semibold underline">
                  AI News
                </span>
              </a>
            </p>

            <p>
              Practice your skills the way they are meant to be practiced - in a
              real interview setting. Algochunk is a FREE platform that provides
              the most popular Data Structures, Algorithms and Front-end
              technical questions asked in a Technical Interview Round.
            </p>
            <p>
              Explore{" "}
              <Link
                to={"playground/code-editor"}
                className="text-blue-500 font-semibold"
              >
                Playground
              </Link>{" "}
              to generate code and practice.
            </p>
            <section className="flex gap-3 w-full justify-center lg:justify-start">
              <Link to={"problem-list"}>
                <button className="p-3 text-sm bg-blue-500 text-white font-semibold rounded-lg hover:bg-neutral-950 hover:outline hover:outline-[1px] hover:outline-blue-500 hover:text-zinc-200 ">
                  DSA Problems
                </button>
              </Link>
              <Link to={"/frontendproblemlist"}>
                <button className="p-3 text-sm outline-blue-500 outline outline-[1px] font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover:font-semibold text-zinc-200">
                  Frontend Problems
                </button>
              </Link>
            </section>
          </section>
          <section className="md:w-[50%] md:mr-[-30%] mt-2 md:mt-0 image overflow-hidden px-5 md:px-0">
            <img
              src="./bg-image.png"
              alt=""
              className="w-full border-[20px] rounded-xl border-zinc-500"
            />
          </section>
        </main>
      </div>

      <section className="flex bg-neutral-950 justify-center items-center">
        <div className="text-zinc-200 leading-relaxed tracking-wide my-10 w-[90%] md:w-[80%] text-center">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-zinc-200">
              Multiple solutions and Multiple approaches.
            </p>
            <p>
              Explore multiple solutions to a single question to help you
              understand the core underlying concept. Try out different
              approaches and compare your solution with the provided solutions.
            </p>
          </div>
          <div className="my-10">
            <div className="flex flex-row gap-3 md:justify-between flex-wrap">
              <div className="w-[350px] bg-gradient-to-tr from-neutral-950 from-65% to-stone-900 flex flex-col gap-2 outline outline-[1px] outline-blue-400 rounded-xl p-5 text-left">
                <p className="text-xl text-zinc-200 font-semibold">
                  Boilerplate
                </p>
                <p>
                  A standard code snippet that is provided to you, you can start
                  writing code with the snippet.
                </p>
              </div>
              <div className="w-[350px] bg-gradient-to-tr from-neutral-950 from-65% to-stone-900 flex flex-col gap-2 outline outline-[1px] outline-blue-400 rounded-xl p-5 text-left">
                <p className="text-xl font-semibold text-zinc-200">Solutions</p>
                <p>
                  An intuitive solution that gets the job done. This solution
                  will get accepted in any frontend tech interview.
                </p>
              </div>
              <div className="w-[350px] bg-gradient-to-tr from-neutral-950 from-65% to-stone-900 flex flex-col gap-2 outline outline-[1px] outline-blue-400 rounded-xl p-5 text-left">
                <p className="text-xl font-semibold text-zinc-200">
                  Better Solution(s)
                </p>
                <p>
                  A more optimized approach towards the given problem that
                  follows a more standardized approach.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="./solution-better.png"
              alt=""
              className="w-[100%] md:w-[80%] border-[15px] border-zinc-500 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* <section className="h-[100vh] bg-neutral-950">
        <div className="relative h-full w-full bg-neutral-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
