'use client'

import Card from "@/components/Card";
import { sales } from "@/utils/Filters";
import { useAtomValue } from "jotai";
import { filtersAtom } from "@/utils/atoms";

const MainPage = () => {

  const filters = useAtomValue(filtersAtom)

  console.log(filters)


  const filteredSales = sales.filter((item) => {
    return (
      (filters.type ? item.type === filters.type : true) &&
      (filters.location ? item.location === filters.location : true) &&
      (filters.theme.length > 0 ? filters.theme.includes(item.theme) : true) &&
      (filters.activity.length > 0 ? filters.activity.includes(item.activity) : true) &&
      (filters.price ? Number(item.price) <= Number(filters.price) : true) &&
      (filters.time ? Number(item.time) <= Number(filters.time) : true) &&
      (filters.size ? Number(item.size) >= Number(filters.size) : true) &&
      (filters.vehicle.length > 0 ? filters.vehicle.includes(item.vehicle) : true) &&
      (filters.features.length > 0 ? filters.features.includes(item.features) : true)
    );
  });

  console.log(filteredSales)
  return (
    <section className="flex flex-wrap m-auto gap-3 justify-center my-4">
      {filteredSales.length>0 ? filters?.filter? filteredSales?.map((sale, i) =>
         <Card sale={sale} key={i} />
      ):sales?.map((sale, i) =>
        sale?.type == "TOURS" && <Card sale={sale} key={i} /> 
      ): <p>Sorry we couldn't find any option for your filter. </p>}

     
    </section>
  );
};

export default MainPage;
