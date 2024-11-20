import {axiosInstance} from "./axios.config.ts";

export const getTokenAccess = async (initData) => {
    console.log(initData,'initData')
    try {
        const response = await axiosInstance.post('/api/auth/getJwtByInitData', {initData});
        console.log(response, 'response')
        return response.data
    } catch (err: unknown) {
        console.log(err,'err')
        return err
    }

}