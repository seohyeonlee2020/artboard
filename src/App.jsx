import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import Artcard from './components/Artcard';
import Header from './components/Header';

const artcards = [
	{ src: '/need-break.jpg', title: "Need a Break", category: "class", author: "Seohyeon Lee", year: "Nov 2023", hidden: false },
	{ src: '/self-portrait-double.png', title: "Self w/ Long Hair", category: "class", author: "Seohyeon Lee", year: "Oct 2023", hidden: false },
	{ src: '/art-studio.png', title: "Art Studio", category: "class", author: "Seohyeon Lee", year: "Sep 2023", hidden: false },
	{ src: '/dance-in-the-rain.jpg', title: "Dance In the Rain", category: "projects", author: "Seohyeon Lee", year: "Jul 2022", hidden: true },
	{ src: '/wall-of-truth.png', title: "Foolbox and the Wall of Truth", category: "projects", hidden: false },
	{ src: '/blame.png', title: "Blame", author: "Seohyeon Lee", year: "Jul 2022", category: "projects", hidden: false },
	{ src: '/stumped.png', title: "Stumped", author: "Seohyeon Lee", year: "Jun 2022", category: "projects", hidden: false },
	{ src: '/out-but.png', title: "Out, But...", author: "Seohyeon Lee", year: "Jun 2022", category: "projects", hidden: false },
	{ src: '/there-will-be-a-way-out.png', title: "Way Out", author: "Seohyeon Lee", year: "Spring 2022", category: "projects", hidden: false },
	{ src: '/financial-literacy.png', title: "Financial Literacy", author: "Seohyeon Lee", category: "tsl", year: "Jun 2022", hidden: false },
	{ src: '/창작의-기쁨.png', title: "창작의 기쁨", author: "Seohyeon Lee", year: "Jun 2022", category: "projects", hidden: false },
	{ src: '/undecided-future.jpg', title: "진로 고민", author: "Seohyeon Lee", year: "HS", category: "personal", hidden: false },
	{ src: '/writing.jpg', title: "Writing", author: "Seohyeon Lee", year: "HS", category: "personal", hidden: false },
].filter((card) => card.hidden === false);

const ArtcardContainer = ({ filterFn }) => (
	<div className="artcard-container">
		{artcards.filter(filterFn).map((artcard, index) => (
			<Artcard
				key={index}
				src={artcard.src}
				title={artcard.title}
				author={artcard.author}
				year={artcard.year}
			/>
		))}
	</div>
);

const All = () => <ArtcardContainer filterFn={() => true} />;
const Projects = () => <ArtcardContainer filterFn={(card) => card.category === "projects"} />;
const Archive = () => <ArtcardContainer filterFn={(card) => card.year === "HS"} />;

const Layout = () => (
	<div>
		<Header />
		<Outlet />
	</div>
);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<All />} />
			<Route path="projects" element={<Projects />} />
			<Route path="archive" element={<Archive />} />
		</Route>
	)
);

const App = () => (
	<div className="App">
		<RouterProvider router={router} />
	</div>
);

export default App;
