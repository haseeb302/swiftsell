import React, { Component } from "react";
import Banner from "../Common/Banner";
import Item from "../Common/Item";
import Pagination from "../Common/Pagination";
import { items } from "../../data";
import ChatList from "../Common/ChatList";
import { EmojiHappyIcon, ChevronRightIcon } from "@heroicons/react/outline";

export class Chat extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
          <div className="p-12 lg:p-20 w-full">
            <div className="max-h-full h-full flex flex-row">
              <ChatList />
              <section className="relative max-h-full h-full bg-white rounded-lg w-full flex flex-col lg:flex hidden">
                <div className="flex-1 overflow-y-scroll p-5 scrollbar-thumb-color scrollbar-width space-y-5">
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>{" "}
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>{" "}
                  {/* // Left */}
                  <div className="flex justify-start">
                    <div className="w-14 mr-5">
                      <img
                        className="rounded-full w-full mr-2"
                        src="https://i.pravatar.cc/300?img=3"
                      />
                    </div>
                    <div className="flex flex-col space-y-5 text-left">
                      <div>
                        <span className="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl">
                          How are you bro?
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* // Right */}
                  <div className="flex justify-end">
                    <div className="space-y-5 text-right">
                      <div className="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                        I'm good bro how are you?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none p-5">
                  <div>
                    <div className="relative flex">
                      <span className="absolute inset-y-0 flex-items-center">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                          <EmojiHappyIcon className="w-6 h-6" />
                        </button>
                      </span>
                      <input
                        type="text"
                        placeholder="Type your message here.."
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-400 pl-12 bg-gray-100 rounded-full py-3 pr-5"
                      />
                      <div className="ml-5">
                        <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-gray-900 hover:bg-gray-800 focus:outline-none">
                          <ChevronRightIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
