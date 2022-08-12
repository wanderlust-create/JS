const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "53fdb133",
            s: "avengers"
        }
    })
    console.log(response.data)
}

fetchData()
