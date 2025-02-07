import React from 'react'
import { Heading, JobCategoryCard } from '../../paths'
import icon1 from "../../app/images/icon1.png";
import icon2 from "../../app/images/icon2.png";
import icon3 from "../../app/images/icon3.png";
import icon4 from "../../app/images/icon4.png";
import icon5 from "../../app/images/icon5.png";
import icon6 from "../../app/images/icon6.png";
import icon7 from "../../app/images/icon7.png";
import icon8 from "../../app/images/icon8.png";
import icon9 from "../../app/images/icon9.png";

const JobCategory = () => {
    return (
        <div className='pt-8 md:pt-20 pb-8 md:pb-12'>
            {/* Heading */}
            <Heading mainHeading="Popular job categories" subHeading="2020 jobs live - 293 added today" />

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-3 items-center">
                <JobCategoryCard image={icon1.src} category='Finance' openPosition='23' />
                <JobCategoryCard image={icon2.src} category='Marketing' openPosition='13' />
                <JobCategoryCard image={icon3.src} category='Sales' openPosition='53' />
                <JobCategoryCard image={icon4.src} category='Development' openPosition='13' />
                <JobCategoryCard image={icon5.src} category='HR' openPosition='10' />
                <JobCategoryCard image={icon6.src} category='Teacher' openPosition='8' />
                <JobCategoryCard image={icon7.src} category='Mechanic' openPosition='42' />
                <JobCategoryCard image={icon8.src} category='Retailer' openPosition='25' />
                <JobCategoryCard image={icon9.src} category='Business' openPosition='31' />
            </div>
        </div>
    )
}

export default JobCategory
