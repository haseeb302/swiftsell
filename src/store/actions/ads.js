import { adTypes } from "../constants/types"

export const createAd = (ad) => {
    return {
        type: adTypes.CREATE_AD,
        payload: ad,
    }
}