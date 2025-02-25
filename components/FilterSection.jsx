import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { theme, activity, vehicle, features } from "@/utils/Filters";
import Price from "./Price";
import Time from "./Time";
import GroupSize from "./GroupSize";

const FilterSection = ({ filters, setFilters }) => {
  return (
    <section>
      <div className="my-2">
        <h3 className="font-bold">Location</h3>
        <div className="border rounded-lg  px-2 flex justify-between">
          <input
            value={filters?.location || ""}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="border-none outline-none"
            type="text"
            placeholder="where you wanna visit..."
          />
          <MagnifyingGlassIcon className="size-6 text-primary-400 " />
        </div>
      </div>

      <div className="my-2">
        <h3 className="font-bold">Theme</h3>
        <div className="flex gap-2">
          {theme?.map((item, i) => (
            <p
              role="button"
              key={i}
              className={
                filters?.theme?.includes(item)
                  ? "border rounded-lg px-1 text-xs bg-primary-400"
                  : "border rounded-lg px-1 text-xs"
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  theme: filters.theme.includes(item)
                    ? filters.theme.filter((themeItem) => themeItem !== item) // Eğer zaten varsa çıkar
                    : [...filters.theme, item], // Yoksa ekle
                })
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="my-2">
        <h3 className="font-bold">Activity</h3>
        <div className="flex gap-2">
          {activity?.map((item, i) => (
            <p
              role="button"
              key={i}
              className={
                filters?.activity?.includes(item)
                  ? "border rounded-lg px-1 text-xs bg-primary-400"
                  : "border rounded-lg px-1 text-xs"
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  activity: filters.activity.includes(item)
                    ? filters.activity.filter(
                        (activityItem) => activityItem !== item
                      ) // Eğer zaten varsa çıkar
                    : [...filters.activity, item], // Yoksa ekle
                })
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold">Price</h3>
        <div className="flex gap-2">
          <Price filters={filters} setFilters={setFilters}/>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Start Time</h3>
        <div className="flex gap-2">
          <Time filters={filters} setFilters={setFilters}/>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Group Size</h3>
        <div className="flex gap-2">
          <GroupSize filters={filters} setFilters={setFilters}/>
        </div>
      </div>

      <div className="my-2">
        <h3 className="font-bold">Vehicle</h3>
        <div className="flex gap-2">
          {vehicle?.map((item, i) => (
            <p
              role="button"
              key={i}
              className={
                filters?.vehicle?.includes(item)
                  ? "border rounded-lg px-1 text-xs bg-primary-400"
                  : "border rounded-lg px-1 text-xs"
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  vehicle: filters.vehicle.includes(item)
                    ? filters.vehicle.filter((themeItem) => themeItem !== item) // Eğer zaten varsa çıkar
                    : [...filters.vehicle, item], // Yoksa ekle
                })
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="my-2">
        <h3 className="font-bold">Features</h3>
        <div className="flex gap-2">
          {features?.map((item, i) => (
            <p
              role="button"
              key={i}
              className={
                filters?.features?.includes(item)
                  ? "border rounded-lg px-1 text-xs bg-primary-400"
                  : "border rounded-lg px-1 text-xs"
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  features: filters.features.includes(item)
                    ? filters.features.filter((themeItem) => themeItem !== item) // Eğer zaten varsa çıkar
                    : [...filters.features, item], // Yoksa ekle
                })
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
