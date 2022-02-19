import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomTopBtn from "./components/Common/BottomToTopBtn/BottomTopBtn";
import Footer from "./components/Common/Footer/Footer/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs/AboutUs";
import MemberCreated from "./components/pages/Checkout/MemberCreated/MemberCreated";
import NotSelected from "./components/pages/Checkout/NotSelected/NotSelected";
import PaymentContainer from "./components/pages/Checkout/Payment/PaymentContainer/PaymentContainer";
import UserData from "./components/pages/Checkout/UserData/UserData/UserData";
import ClassDetail from "./components/pages/ClassDetail/ClassDetail";
import Contact from "./components/pages/ContactUs/Contact/Contact";
import HomeContainer from "./components/pages/Home/HomeContainer/HomeContainer";
import NotFound from "./components/pages/NotFound/NotFound";
import OurClasses from "./components/pages/OurClass/OurClass";
import Pricing from "./components/pages/Pricing/Pricing/Pricing";

export const UserContext = createContext();

function App() {
	const [cart, setCart] = useState(true);
	const [userDetail, setUserDetail] = useState(true);
	const [paymentSuccess, setPaymentSuccess] = useState(true);

	useEffect(() => {
		const cartItem = JSON.parse(sessionStorage.getItem("cart"));
		const userData = JSON.parse(sessionStorage.getItem("userDetail"));
		if (cartItem) {
			setCart(cartItem);
		}
		if (userData) {
			setUserDetail(userData);
		}
	}, []);

	return (
		<UserContext.Provider
			value={{
				cart,
				setCart,
				userDetail,
				setUserDetail,
				paymentSuccess,
				setPaymentSuccess,
			}}
		>
			<main className="App">
				<BottomTopBtn />
				<Router>
					<Switch>
						<Route exact path="/">
							<HomeContainer />
						</Route>
						<Route path="/home">
							<HomeContainer />
						</Route>
						<Route path="/classes">
							<OurClasses />
						</Route>
						<Route path="/pricing">
							<Pricing />
						</Route>
						<Route path="/class/:classId">
							<ClassDetail />
						</Route>
						<Route path="/about">
							<AboutUs />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/checkout/register">
							{cart ? <UserData /> : <NotSelected />}
						</Route>
						<Route path="/checkout/payment">
							{cart && userDetail ? <PaymentContainer /> : <NotSelected />}
						</Route>
						<Route path="/checkout/memberCreated">
							{cart && userDetail && paymentSuccess ? (
								<MemberCreated />
							) : (
								<NotSelected />
							)}
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</main>
		</UserContext.Provider>
	);
}

export default App;
