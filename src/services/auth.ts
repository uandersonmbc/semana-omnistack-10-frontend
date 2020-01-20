export const ACCESS_KEY = "@week10-access_key";
export const LOCATION = "@week10-location";
export const TECHS = "@week10-techs";

export const isAuthenticated = () => {
    return (localStorage.getItem(ACCESS_KEY) !== null) ? { role: 'authenticated', logged: true } : { role: '', logged: false };
}

export const getAccessKey = () => localStorage.getItem(ACCESS_KEY);
export const getLocation = () => JSON.parse(localStorage.getItem(LOCATION) + '');
export const getTechs = () => JSON.parse(localStorage.getItem(TECHS) + '');

export const setAccessKey = (access_key: string) => {
    localStorage.setItem(ACCESS_KEY, access_key);
};

export const setLocation = (location: any) => {
    let loca = JSON.stringify(location);
    localStorage.setItem(LOCATION, loca);
};

export const setTechsLocal = (techs: any) => {
    let t = JSON.stringify(techs);
    localStorage.setItem(TECHS, t);
};

export const logout = () => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(LOCATION);
    localStorage.removeItem(TECHS);
};
