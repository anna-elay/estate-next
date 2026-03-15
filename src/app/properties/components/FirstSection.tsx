"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  CalendarIcon,
  CubeIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
 import GalleryCart from "@/components/shared/GalleryCart";
import { properties, PropertyProps } from "@/data/properties";

const formSchema = z.object({
  searchQuery: z.string().optional(),
  location: z.string().optional(),
  propertyType: z.string().optional(),
  priceRange: z.string().optional(),
  propertySize: z.string().optional(),
  buildYear: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const LOCATIONS = ["New York", "Los Angeles", "Miami", "Chicago", "Austin"];
const PROPERTY_TYPES = [...new Set(properties.map((p) => p.type))];
const PRICE_RANGES = [
  "$100k - $300k",
  "$300k - $500k",
  "$500k - $700k",
  "$700k - $1M",
  "$1M+",
];
const PROPERTY_SIZES = ["500 sqft", "1000 sqft", "1500 sqft", "2000+ sqft"];
const BUILD_YEARS = ["2000", "2005", "2010", "2015", "2020", "2025"];

type StringFormKeys = keyof FormData;

const parsePriceRange = (
  range: string,
): { min: number; max: number } | null => {
  const match = range.match(/\$(\d+)k\s*-\s*\$(\d+)k/);
  if (match) {
    return { min: parseInt(match[1]) * 1000, max: parseInt(match[2]) * 1000 };
  }
  if (range.includes("+")) {
    const matchPlus = range.match(/\$(\d+)k\+/);
    if (matchPlus) {
      return { min: parseInt(matchPlus[1]) * 1000, max: Infinity };
    }
  }
  return null;
};

const hasActiveFilters = (data: FormData) => {
  return !!(
    data.searchQuery ||
    data.location ||
    data.propertyType ||
    data.priceRange ||
    data.propertySize ||
    data.buildYear
  );
};

const FirstSection = () => {
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(
    [],
  );
  const [showResults, setShowResults] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      searchQuery: "",
      location: "",
      propertyType: "",
      priceRange: "",
      propertySize: "",
      buildYear: "",
    },
  });

  const searchQuery = watch("searchQuery");
  const location = watch("location");
  const propertyType = watch("propertyType");
  const priceRange = watch("priceRange");
  const propertySize = watch("propertySize");
  const buildYear = watch("buildYear");

 
  useEffect(() => {
    const currentFilters = {
      searchQuery,
      location,
      propertyType,
      priceRange,
      propertySize,
      buildYear,
    };

    if (hasActiveFilters(currentFilters)) {
      let filtered = [...properties];

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (property) =>
            property.title.toLowerCase().includes(query) ||
            property.description.toLowerCase().includes(query),
        );
      }


      if (propertyType) {
        filtered = filtered.filter(
          (property) => property.type === propertyType,
        );
      }


      if (priceRange) {
        const range = parsePriceRange(priceRange);
        if (range) {
          filtered = filtered.filter(
            (property) =>
              property.price >= range.min && property.price <= range.max,
          );
        }
      }

      setFilteredProperties(filtered);
      setShowResults(true);
    } else {
      setFilteredProperties([]);
      setShowResults(false);
    }
  }, [
    searchQuery,
    location,
    propertyType,
    priceRange,
    propertySize,
    buildYear,
  ]);


  const SelectField = ({
    name,
    icon: Icon,
    options,
    placeholder,
  }: {
    name: StringFormKeys;
    label: string;
    icon: React.ElementType;
    options: string[];
    placeholder: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = watch(name) as string;

    return (
      <div className="relative">
        <div className="flex items-center justify-between p-3 border-8 border-gray-10 inner-border-1 rounded-lg bg-gray-08">
          <div className="flex items-center flex-1">
            <Icon className="w-5 h-5 text-gray-60" />
            <input
              {...register(name)}
              readOnly
              value={value || ""}
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none pl-1 bg-transparent w-full cursor-pointer ${
                errors[name] && touchedFields[name] ? "text-red-500" : ""
              }`}
              placeholder={placeholder}
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-7 h-7 bg-gray-10 rounded-full flex items-center justify-center"
          >
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Выпадающий список */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full">
            <div className="relative rounded-md shadow-lg overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: "blur(10px) saturate(180%)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  background: "rgba(14, 16, 21, 0.4)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                }}
              />
              <div className="relative z-10 border border-gray-15 rounded-md bg-gray-08/50">
                {options.map((option) => (
                  <div
                    key={option}
                    className="p-3 hover:bg-gray-10/80 cursor-pointer transition-colors"
                    onClick={() => {
                      setValue(name, option, { shouldValidate: true });
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const onSubmit = async (data: FormData) => {
    // console.log("Search submitted with filters:", data);
    // console.log("Found properties:", filteredProperties.length);
  };

  return (
    <section id="portfolio" className="scroll-mt-35">
      <div className="relative bg-linear-to-r from-gray-15 border-b border-gray-15">
        <div className="pt-10 lg:pt-25 pb-15 lg:pb-32.5 px-4 lg:px-20">
          <h2 className="text-[28px] lg:text-[38px] pb-2.5">
            Find Your Dream Property
          </h2>
          <p>
            Welcome to Estatein, where your dream property awaits in every
            corner of your beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Поисковая строка */}
        <div className="pt-10 lg:pt-0 px-4 container mx-auto">
          <div className="w-full left-0 lg:absolute lg:-translate-y-1/2 md:p-20 lg:p-40">
            <div className="md:pl-22.5 flex justify-between p-4 border-4 lg:border-8 border-gray-10 inner-border-1 rounded-xl lg:rounded-b-0 lg:rounded-t-2xl bg-gray-08">
              <input
                {...register("searchQuery")}
                className="flex-1 min-w-0 w-auto caret-white p-1 text-xl placeholder:text-gray-40 hover:border hover:border-gray-10 hover:rounded-md focus:outline-none bg-transparent"
                type="text"
                placeholder="Search For A Property"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-nowrap flex gap-1 items-center btn-purple p-[14px_20px] disabled:opacity-50"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span className="hidden lg:block">
                  {isSubmitting ? "Searching..." : "Find Property"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Сетка фильтров */}
        <div className="pt-4 lg:pt-11 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <SelectField
            name="location"
            label="Location"
            icon={MapPinIcon}
            options={LOCATIONS}
            placeholder="Location"
          />

          <SelectField
            name="propertyType"
            label="Property Type"
            icon={HomeModernIcon}
            options={PROPERTY_TYPES}
            placeholder="Property Type"
          />

          <SelectField
            name="priceRange"
            label="Pricing Range"
            icon={BanknotesIcon}
            options={PRICE_RANGES}
            placeholder="Pricing Range"
          />

          <SelectField
            name="propertySize"
            label="Property Size"
            icon={CubeIcon}
            options={PROPERTY_SIZES}
            placeholder="Property Size"
          />

          <SelectField
            name="buildYear"
            label="Build Year"
            icon={CalendarIcon}
            options={BUILD_YEARS}
            placeholder="Build Year"
          />
        </div>
      </form>

      <div className="container mx-auto px-4">
        {showResults &&
          (filteredProperties.length > 0 ? (
            <GalleryCart properties={filteredProperties} />
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">
                🏠 There is no suitable property
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search filters
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FirstSection;

