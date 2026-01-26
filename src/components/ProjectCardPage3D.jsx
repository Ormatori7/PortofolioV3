import { section } from "framer-motion/client";

function Navbar3DProject({ setPage }) {
  return (
    <header className="fixed mt-10 left-1/2 -translate-x-1/2 w-4/5 z-50 backdrop-blur-xl border border-white/10 rounded-4xl transition-all bg-blue-500">
      
      <button
        onClick={() => setPage("ProjectsFunction")}
        className={
          "px-6 py-2 rounded-full transition-all duration-300  cursor-pointer text-white bg-white/10 m-4 font-bold"
        }
      >
        Back to Projects
      </button>
    </header>
  );
}

function Page3DProject({ setPage }) {
  return (
    <section className="bg-red-500/25 flex flex-col pt-5 min-h-dvh">
      <Navbar3DProject setPage={setPage} />
      
      <div className="pt-50">
        gfgfdg
      </div>
    </section>
  );
}
export default Page3DProject;
