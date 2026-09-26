import api from "../api/axios";

export const resolveImageUrl = (image) => {
    if (!image) return "";
    if (/^(https?:|data:|blob:)/i.test(image)) return image;

    try {
        return new URL(image, new URL(api.defaults.baseURL, window.location.origin).origin).toString();
    } catch {
        return image;
    }
};
