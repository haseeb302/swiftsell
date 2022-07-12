import React, { Component } from "react";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { items } from "../../data";
import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  Location,
  Link,
} from "react-router-dom";

interface RouterProps {
  navigate: NavigateFunction;
  readonly params: Params<string>;
  location: Location;
}

export type WithRouterProps<T> = T & RouterProps;
type OmitRouter<T> = Omit<T, keyof RouterProps>;

export function withRouter<T>(
  Component: React.ComponentType<OmitRouter<T> & RouterProps>
) {
  return (props: OmitRouter<T>) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        {...props}
      />
    );
  };
}

interface TestProps {
  params: any;
}

interface TestState {
  item: any;
}

export class ItemDetail extends Component<
  WithRouterProps<TestProps>,
  TestState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: undefined,
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    const item = items.filter((item: any) => item.id === parseInt(id));
    this.setState({ item: item[0] });
  }

  render() {
    const { item } = this.state;
    console.log(item);
    return (
      <div className="grid grid-cols-3 mx-20 my-32 gap-x-12">
        <div className="w-full col-span-2">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={item?.images[0].src}
              alt="Front of men's Basic Tee in black."
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-6 gap-x-2">
              {item?.images.map((image: any) => (
                <div className="aspect-w-1 aspect-h-1 border rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt="Front of men's Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border rounded-lg w-full mt-2">
            <h1 className="font-bold text-lg text-gray-800">Details</h1>
            <hr />
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-4">
              <div className="flex justify-between">
                <span className="font-bold text-sm text-gray-500">
                  Condition
                </span>
                <span className="text-sm text-gray-800">
                  {item?.details?.condition}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-sm text-gray-500">Brand</span>
                <span className="text-sm text-gray-800">
                  {item?.details?.brand}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-sm text-gray-500">
                  Category
                </span>
                <span className="text-sm text-gray-800">
                  {item?.details?.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-sm text-gray-500">Price</span>
                <span className="text-sm text-gray-800">
                  Rs {item?.details?.price}
                </span>
              </div>
            </div>
            <h1 className="font-bold text-lg text-gray-800 mt-4">
              Description
            </h1>
            <hr className="my-2" />
            <div className="p-2">
              <p>{item?.description}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-x-2 p-4 border rounded-lg w-full">
            <div className="">
              <h1 className="font-bold text-3xl text-gray-700">
                Rs {item?.price}
              </h1>
              <h3 className="text-md mt-2 text-gray-800">
                <a href="#">
                  <span aria-hidden="true" />
                  {item?.title}
                </a>
              </h3>
              <div className="mt-3">
                <p className="text-xs text-gray-500">{item?.ad_location}</p>
              </div>
            </div>
            <div className="grid grid-flow-row">
              <div className="inline-flex justify-end mt-1">
                <div className="px-2">
                  <ShareIcon className="w-6 h-6" />
                </div>
                <div className="px-2">
                  <HeartIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="justify-self-end self-end">
                <p className="text-xs text-gray-500">{item?.created_at}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row grid-rows-3 p-4 border rounded-lg w-full mt-2">
            <div className="mb-0">
              <h1 className="font-semibold text-lg text-gray-700">
                Seller Description
              </h1>
            </div>
            <div className="flex">
              <img
                className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
                src={item?.author?.profile_img}
              />
              <div className="pl-4">
                <h1 className="font-bold text-lg">{item?.author?.name}</h1>
                <p className="text-sm text-gray-500">
                  Member Since {item?.author?.member_date}
                </p>
              </div>
              <div className="flex-1 self-center">
                <Link to={"/chat"}>
                  <button className="float-right">
                    <ArrowCircleRightIcon className="w-8 h-8" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="block">
              <Link to={"/chat"}>
                <button className="p-4 bg-gray-900 text-white text-center mt-2 rounded-md w-full hover:bg-gray-800">
                  Chat with seller
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemDetail);
