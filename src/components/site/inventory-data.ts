import catContainers from "@/assets/cat-containers.jpg";
import catSemiTrucks from "@/assets/cat-semi-trucks.jpg";
import catTrailerHeads from "@/assets/cat-trailer-heads.jpg";
import catTrailers from "@/assets/cat-trailers.jpg";
import unitCascadia from "@/assets/unit-cascadia.jpg";
import unitContainer from "@/assets/unit-container.jpg";
import unitT680 from "@/assets/unit-t680.jpg";

export type Category = {
  name: string;
  units: string;
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    name: "Semi Trucks",
    units: "14 Units Available",
    image: catSemiTrucks,
    alt: "Chrome grille detail of a heavy-duty semi truck",
  },
  {
    name: "Containers",
    units: "82 Units Available",
    image: catContainers,
    alt: "Stacked shipping containers at a port terminal",
  },
  {
    name: "Trailers",
    units: "26 Units Available",
    image: catTrailers,
    alt: "Trailer chassis lined up outside a depot warehouse",
  },
  {
    name: "Trailer Heads",
    units: "19 Units Available",
    image: catTrailerHeads,
    alt: "Close-up of a heavy-duty trailer head tractor unit",
  },
];

export type Listing = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  alt: string;
  specs: { label: string; value: string }[];
  cta: string;
};

export const listings: Listing[] = [
  {
    title: "2022 Freightliner Cascadia",
    subtitle: "VIN: 3AKJC4DA8NF55122",
    price: "$142,500",
    image: unitCascadia,
    alt: "2022 Freightliner Cascadia semi truck side profile",
    specs: [
      { label: "Mileage", value: "245,000 mi" },
      { label: "Engine", value: "DD15 505HP" },
      { label: "Trans", value: "DT12 Auto" },
      { label: "Sleeper", value: '72" Raised Roof' },
    ],
    cta: "Request Specifications",
  },
  {
    title: "40' High Cube Container",
    subtitle: "Type: Cargo Worthy (CW)",
    price: "$4,800",
    image: unitContainer,
    alt: "40 foot high cube shipping container in a storage yard",
    specs: [
      { label: "Int Height", value: "9' 6\"" },
      { label: "Max Wt", value: "67,200 lbs" },
      { label: "Volume", value: "2,694 cu ft" },
      { label: "Material", value: "Corten Steel" },
    ],
    cta: "Get Shipping Quote",
  },
  {
    title: "2021 Kenworth T680",
    subtitle: "Stock ID: #MT-88422",
    price: "$129,000",
    image: unitT680,
    alt: "White Kenworth T680 trailer head parked at an industrial lot",
    specs: [
      { label: "Mileage", value: "312,000 mi" },
      { label: "Engine", value: "PACCAR MX13" },
      { label: "Trans", value: "Eaton 12spd" },
      { label: "Wheelbase", value: '232"' },
    ],
    cta: "Request Specifications",
  },
];
