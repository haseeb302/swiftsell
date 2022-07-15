import React from "react";
import { chatList } from "../../data";

interface ChatListProps {}

const ChatList: React.FC<ChatListProps> = () => {
  const active_chat_id = 1;
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <aside className="w-full lg:w-2/6 border border-gray-200 rounded-lg mr-5 bg-white">
        <div className="max-w-full h-full w-full flex flex-col">
          <div className="flex p-10 justify-between bg-gray-900">
            <div className="text-4xl font-semibold text-white">Chat</div>
          </div>
          <div className="flex-1 overflow-y-scroll scrollbar-width scrollbar-thumb-color mt-2">
            <div className="w-full">
              {chatList.map((chat) => (
                <div
                  className={classNames(
                    chat.id === active_chat_id ? "bg-gray-100 border-l-4" : "",
                    "cursor-pointer flex px-10 py-4 border-b-2"
                  )}
                  key={chat.id}
                >
                  <div className="mr-4 relative w-12">
                    <img
                      className="rounded-full w-full mr-2"
                      src={chat.profile_img}
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center">
                      <div className="text-gray-800 text-base font-semibold">
                        {chat.name}
                      </div>
                      <div className="text-gray-700 text-xs">
                        {chat.last_message_sent}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {chat.last_message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ChatList;
