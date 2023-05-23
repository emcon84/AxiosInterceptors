import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const PrivatePublicInterceptor = () => {

    const updateHeaders = (request: AxiosRequestConfig) => {
        const token = '123587895467897897';
        const newHeaders = {
            Authorization: token,
            "Content-Type": "application/json",
        }
        request.headers = newHeaders;
        return request;
    }

    axios.interceptors.request.use((request: any) => {
        if (request.url?.includes('assets')) return request;
        return updateHeaders(request);
    });

    axios.interceptors.response.use(
        (response) => {
            console.log(response);
            return response;
        },
        (error) => {
            console.log('Error', error);
            return Promise.reject(error);
        }
    )
}