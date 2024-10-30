export const BACKGROUND_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg";



export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTRiYzU0M2VkOTE3MjgxNmQ0MmJkYjU1OWQ3ODU0ZCIsIm5iZiI6MTczMDAxNjU1Mi4xMDIwODcsInN1YiI6IjY3MWRmM2E1NzY5MTA3ZDc3YjQ4MDg0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uQouCEb9hqkNHO09lXp0y3utQirdPU11RgcO6bQBZxM'
    }
  };

export const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?page=1';


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  {identifier: "telugu",name:"Telugu"},
  { identifier: "spanish", name: "Spanish" },
 
];


export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY

