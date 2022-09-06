const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "53fdb133",
            s: searchTerm
        }
    })
    return response.data.Search
}

const input = document.querySelector('input')

const onInput = async event => {
    // will return a promise because fetchData is an asyn func
    const movies = await fetchData(event.target.value)
    
    for (let movie of movies) {
        
    }
}
input.addEventListener('input', debounce(onInput, 500))
  