import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

interface ItemProps {
  item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <>
      <Link to={`/item/${item.id}`}>
        <div className="group relative border rounded-lg">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            {item.images.map((image: any) => (
              <img
                src={image.src}
                alt="Front of men's Basic Tee in black."
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between p-2">
            <div className="truncate mx-2">
              <p className="text-md font-bold text-gray-700">{item.title}</p>
              <p className="font-semibold mt-1 text-sm text-gray-600">
                Rs {item.price}
              </p>
            </div>
            <div>
              <HeartIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs text-gray-500">{item.ad_location}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
