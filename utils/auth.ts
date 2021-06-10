import jwtDecode from "jwt-decode";

export const AuthValidation = () => {
        if (localStorage.getItem("JWT_TOKEN")) {
                const decodeToken: any = jwtDecode(localStorage.getItem("JWT_TOKEN"));
                if (decodeToken.exp * 23000 < Date.now()) {
                        localStorage.removeItem("JWT_TOKEN");
                }
                return decodeToken;
        }
};
