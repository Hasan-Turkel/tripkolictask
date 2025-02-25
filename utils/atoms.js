import { atom } from "jotai";

export const filterModalAtom = atom(false);
export const filtersAtom = atom({
    location: "",
    theme: [],
    activity: [],
    price: "",
    time: "",
    size: "",
    vehicle: [],
    features: [],
    filter:false,
    type:'TOURS'
  });