import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./assets/fonts/HelveticaNeueCyr-Black.otf";
import "./assets/fonts/HelveticaNeueCyr-Bold.otf";
import "./assets/fonts/HelveticaNeueCyr-Medium.otf";
import "./assets/fonts/HelveticaNeueCyr-Light.otf";
import Scroll from "./utils/Scroll";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const container = document.getElementById("root")!;
const root = createRoot(container);

const queryclient = new QueryClient();
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryclient}>
			<Router>
				<Provider store={store}>
					<Scroll />
					<App />
				</Provider>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
