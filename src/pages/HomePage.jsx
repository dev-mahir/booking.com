import React from "react";
import Header from "../components/Header/Header";
import SearchDestination from "../components/Home/SearchDestination";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import ExploreCard from "../components/Home/ExploreCard";

const HomePage = () => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const res = await fetch("http://localhost:5050/properties");
		const data = await res.json();
		return setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Header className="pb-40" />
			<div className="container -mt-20">
				<h2 className="text-white">Find your next stay</h2>
				<SearchDestination />
				<div className="mt-10">
					<h3>Explore Bangladesh </h3>
					<p className="text-gray-600">
						These popular destinations have a lot to offer
					</p>
					<div className="mt-5 mb-14">
						<ExploreCard data={data} />
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</>
	);
};

export default HomePage;
