"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import FilterSection from "./FilterSection";
import { filterModalAtom, filtersAtom } from "@/utils/atoms";
import { useSetAtom, useAtomValue } from "jotai";

const FilterModal = () => {
  const setFilterModal = useSetAtom(filterModalAtom);
  const setFiltersAtom = useSetAtom(filtersAtom);
  const filterModal = useAtomValue(filterModalAtom);
  const [filter, setFilter] = useState("TOURS");
  const [filters, setFilters] = useState({
    location: "",
    theme: [],
    activity: [],
    price: "20000",
    time: "1425",
    size: "1",
    vehicle: [],
    features: [],
  });

  return (
    <Dialog
      open={filterModal}
      onClose={() => setFilterModal(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div
                className="flex justify-end"
                role="button"
                onClick={() => setFilterModal(false)}
              >
                <XCircleIcon className="size-6 " />
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    <div className="flex gap-2">
                      <p
                        className={
                          filter == "TOURS"
                            ? "bg-primary-600 rounded-lg p-1 text-white "
                            : "bg-primary-400 rounded-lg p-1 text-white "
                        }
                        role="button"
                        onClick={() => setFilter("TOURS")}
                      >
                        TOURS
                      </p>
                      <p
                        className={
                          filter == "TICKETS"
                            ? "bg-primary-600 rounded-lg p-1 text-white "
                            : "bg-primary-400 rounded-lg p-1 text-white "
                        }
                        role="button"
                        onClick={() => setFilter("TICKETS")}
                      >
                        TICKETS
                      </p>
                      <p
                        className={
                          filter == "RENT"
                            ? "bg-primary-600 rounded-lg p-1 text-white "
                            : "bg-primary-400 rounded-lg p-1 text-white "
                        }
                        role="button"
                        onClick={() => setFilter("RENT")}
                      >
                        RENT
                      </p>
                      <p
                        className={
                          filter == "TRANSFER"
                            ? "bg-primary-600 rounded-lg p-1 text-white "
                            : "bg-primary-400 rounded-lg p-1 text-white "
                        }
                        role="button"
                        onClick={() => setFilter("TRANSFER")}
                      >
                        TRANSFER
                      </p>
                    </div>
                  </DialogTitle>
                  <div className="mt-2">
                    <FilterSection filters={filters} setFilters={setFilters} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setFiltersAtom({...filters, filter:true, type:filter});
                  setFilterModal(false);
                }}
                className="inline-flex w-full justify-center rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-primary-600 sm:ml-3 sm:w-auto"
              >
                Search
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() =>
                  setFilters({
                    location: "",
                    theme: [],
                    activity: [],
                    price: "20000",
                    time: "1425",
                    size: "1",
                    vehicle: [],
                    features: [],
                  })
                }
                className="mt-3 inline-flex w-full justify-center rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-primary-600 sm:mt-0 sm:w-auto"
              >
                Reset
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default FilterModal;
