export default async function MovieSearch({ params }) {
    const { query } = params; // Get movie name from the URL
    // const API_KEY = process.env.TMDB_API_KEY; 
    const API_TOKEN = process.env.TMDB_API_TOKEN; // Store API token securely  
    

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`, // Use token securely
        },
    });

    const data = await res.json();
    console.log(data)
    if (!data.results) return <h1>No results found for "{query}"</h1>;

    return (
        <div>
            <h1>Results for "{query}"</h1>
            {data.results.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                    {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> */}
                </div>
            ))}
        </div>
    );
}
