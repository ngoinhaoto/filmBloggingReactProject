"use client";
export default function ForumPosts() {
  return (
    <>
      <div className="md:basis-3/4 p-6 m-2">
        <h2 className="font-bold mb-2 text-3xl ">Post Space!</h2>
        <section className="flex flex-col">
          <a
            href="/post"
            className="bg-white flex shadow-lg rounded-lg flex-col md:flex-row"
          >
            <div className="md:basis-1/4">
              <img src="board.jpg" alt="thumbnail" className="rounded-l-lg" />
            </div>
            <div className="md:basis-3/4 flex-col p-6">
              <div className="text-xl font-medium">
                This film sucks. Don't watch it
              </div>
              <div className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </div>
            </div>
          </a>
        </section>
      </div>
    </>
  );
}
