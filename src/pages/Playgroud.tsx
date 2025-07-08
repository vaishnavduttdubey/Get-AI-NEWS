const Playground = () => {
  return (
    <>
      <div className="h-[100vh] text-zinc-200">
        <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
          <div>
            <h2 className="text-xl font-semibold">Choose the playground</h2>
            <div className="flex gap-5 flex-wrap">
              <div>
                <input
                  type="radio"
                  name="playground"
                  id="editor"
                  value="editor"
                />
                <div>
                  <label htmlFor="editor">Code Editor</label>
                  <img src="" alt="" />
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  name="playground"
                  id="editor"
                  value="editor"
                />
                <div>
                  <label htmlFor="editor">React Editor</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
