const API_URL = "https://api.adviceslip.com/advice"

export const getAdvice =  async () => {
    try {
        const advice = await (await fetch(API_URL)).json()
        return advice.slip
    }
    catch(err) {
        console.error(err)
    }
}