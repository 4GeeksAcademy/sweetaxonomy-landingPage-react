import React from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Card } from "./Card";
import { Footer } from "./Footer";

const Home = () => {
	return (
		<>
			<NavBar />
			<Hero />

			<div className="container">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

            <Footer/>
		</>
	);
};

export default Home;