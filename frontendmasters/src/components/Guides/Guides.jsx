import React from "react";
import { frontendGuides } from "./localdata";
import Footer from "../Footer/Footer";

import {
	BookLinks,
	Container,
	Heading,
	Image,
	Imagebox,
	Bookbox,
} from "./GuidesStyles";

export const Guides = () => {
	const arrow = true;
	return (
		<>
			<Heading>Frontend Masters Books</Heading>

			<Container>
				{/* mapping data from localdata.js file  */}
				{frontendGuides.map((item) => {
					return (
						<div key={item.id}>
							<Bookbox>
								<a className="booklinks" href={item.readonline}>
									<Imagebox>
										<Image src={item.bookimage}></Image>
									</Imagebox>
								</a>
								<BookLinks>
									<a className="booklinks" href={item.readonline}>
										{arrow ? "Read Online >" : null}
									</a>
									<br />
									<a className="booklinks" href={item.github}>
										{arrow ? "Github Repo >" : null}
									</a>
								</BookLinks>
							</Bookbox>
						</div>
					);
				})}
			</Container>
			<Footer />
		</>
	);
};
