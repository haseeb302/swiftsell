import React from "react";

interface PostProps {}

const Post: React.FC<PostProps> = () => {
  return (
    <div className=" max-w-4xl mx-auto mt-32 border p-4 rounded-md bg-white">
      <div>
        <h2 className="font-bold text-center text-4xl text-gray-800 my-4">
          Post your ad!
        </h2>
        {/* <hr /> */}
      </div>
      <form className="grid grid-cols-1 gap-6 mt-8">
        <label className="block">
          <span className="font-semibold text-gray-700">Ad Title</span>
          <input
            type="text"
            className="rounded-md block w-full border-gray-200"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="font-semibold text-gray-700">Description</span>
          <textarea
            className="rounded-md block w-full border-gray-200"
            placeholder=""
          />
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {" "}
            Product Photos{" "}
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  //   for="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <label className="block">
          <span className="text-gray-700">Price</span>
          <input
            type="number"
            className="rounded-md block w-full border-gray-200"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Location</span>
          <input
            type="text"
            className="rounded-md block w-full border-gray-200"
            placeholder=""
          />
        </label>
        <div className=" justify-self-end">
          <button className="bg-gray-800 p-4 block rounded-md text-white">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
