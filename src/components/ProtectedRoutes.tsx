import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

interface Props {
	children: ReactNode;
}
const ProtectedRoutes: React.FC<Props> = ({ children }) => {
	const user = useAppSelector((state) => state.authReducer.user);

	return <>{user ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoutes;
