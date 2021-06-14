import React, { useRef, useState } from "react";

export const GoTop = () => {
	const downRef = useRef(null);
	const upRef = useRef(null);
	const ImgRef = useRef();

	let obj = "";
	const [links, setLinks] = useState("");
	const handelPic = () => {
		obj = ImgRef.current.files[0];
		setLinks(URL.createObjectURL(obj));
		// console.log(links)
	};

	return (
		<div>
			<div>
				<div
					style={{
						marginTop: "50px",
						marginLeft: "30px",
						overflow: "auto",
						backgroundColor: "lightblue",
						width: "450px",
						height: "450px",
					}}
				>
					<button
						style={{ float: "right", position: "relative" }}
						ref={upRef}
						onClick={() => downRef.current.focus()}
					>
						Down
					</button>{" "}
					<br />
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
					diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
					erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
					aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
					adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
					dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
					consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
					ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
					tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum
					dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem
					ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
					nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
					diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
					erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
					aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
					adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
					dolore magna aliquam erat volutpat.Lorem ipsum dolor sit amet,
					consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
					ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
					tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem ipsum
					dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Lorem
					ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
					nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
					diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
					erat volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
					aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetuer
					adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
					dolore magna aliquam erat volutpat.
					<br />
					<button
						style={{ float: "right", position: "relative" }}
						ref={downRef}
						onClick={() => upRef.current.focus()}
					>
						Top
					</button>
				</div>
			</div>
			<br />
			<br />

			<div>
				{links.length > 1 ? (
					<img src={links} style={{ height: "400px" }} />
				) : (
					<h1>Select Pic</h1>
				)}
				<br />
				<br />
				<input type="file" ref={ImgRef} />
				<button disabled={links.length>1} onClick={handelPic}>
					Update
				</button>

				<button  disabled={links.length===0}  onClick={() => setLinks("")}>Remove</button>
			</div>
		</div>
	);
};
