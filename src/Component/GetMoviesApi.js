export const API_KEY = "ad4f944751293854af043da5c16df386";

export const requests =  {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNextfli: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `search/movie?api_key=${API_KEY}&query=`
}
