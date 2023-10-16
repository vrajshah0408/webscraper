/** @format */

import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2  border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping with Web Scraper
              <Image
                src={"/assets/icons/arrow-right.svg"}
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of{" "}
              <span className="text-primary">Web Scraper</span>
            </h1>
            <p className="my-6">
              Web Scraper is a web scraping tool that helps you to extract data
              from websites.
            </p>
            <Searchbar />
           
            
          </div>
        </div>
      </section>
      <section className="Trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16"></div>
        {['Apple Iphone 15', 'Book', 'Laptop'].map((product) => (
          <div>{product}</div>          
        ))}
      </section>
    </>
  );
};

export default Home;
