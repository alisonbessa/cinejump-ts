import React from "react";

import { GlobalStyles } from './components/Styles/global';
import { Wrapper } from './components/Styles/defaultComponents';
import Home from "./components/Home";

const App = () => (
	<>
		<Home />
		<Wrapper>
			<h1>Dentro do wrapper</h1>
		</Wrapper>
		<GlobalStyles />
	</>
)

export default App;
