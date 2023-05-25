import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ExploreCard = ({ data }) => {
	return (
		<Swiper
			spaceBetween={8}
			slidesPerView={6}
			modules={[Navigation]}
			navigation
			>
<<<<<<< HEAD
			{data?.map((properties, index) => (
=======
			{data.map((properties, index) => (
>>>>>>> bed4b0ce0fade2f9a6f2ed96180500eb60e7e1c6
				<SwiperSlide key={index}>
					<div>
						<img
							className="rounded-md"
							src="https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o="
							alt=""
						/>
                        <p className="font-semibold mt-2">{properties.name}</p>
                        <p>{properties.properties} properties</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ExploreCard;
