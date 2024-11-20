import {axiosInstance} from "./axios.config.ts";

export const getTokenAccess = async (userId) => {
    console.log(userId,'initData')
    try {
        const response = await axiosInstance.post('/test/signinByUserId', {userId});
        console.log(response, 'response')
        return response.data
    } catch (err: unknown) {
        console.log(err,'err')
        return err
    }

}