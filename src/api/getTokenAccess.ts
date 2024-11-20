import {axiosInstance} from "./axios.config.ts";

export const getTokenAccess = (initData) => {
    try {
        const response = axiosInstance.post('/api/auth/getJwtByInitData', {initData});
        console.log(response, 'response')
        return response
    } catch (err: unknown) {
        console.log(err,'err')
        return err
    }

}