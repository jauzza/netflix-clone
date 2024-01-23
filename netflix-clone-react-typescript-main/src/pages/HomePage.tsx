// Importing necessary modules and components
// import React from "react";
// import Stack from "@mui/material/Stack";
import { COMMON_TITLES } from "../constant";
import HeroSection from "../components/HeroSection";
import { genreSliceEndpoints, useGetGenresQuery } from "../store/slices/genre";
import SliderRowForGenre from "../components/VideoSlider";
import store from "../store";

// Assuming 'MEDIA_TYPE' is a type, define it
type MEDIA_TYPE = "Movie"; // Update this type based on your actual implementation

// Define a type for the 'SliderRowForGenre' component's props
interface SliderRowForGenreProps {
  key: string;
  genre: { id?: string; name: string }; // Update this type based on the actual structure
  mediaType: MEDIA_TYPE;
}

// Asynchronous loader function
export async function loader() {
  await store.dispatch(genreSliceEndpoints.getGenres.initiate("Movie"));
  return null;
}

// React component
// export function Component() {
//   // Destructuring values from the hook
//   const { data: genres, isSuccess } = useGetGenresQuery("Movie");

//   // Rendering logic based on successful data retrieval
//   if (isSuccess && genres && genres.length > 0) {
//     return (
// //       <Stack spacing={2}>
//         {/* Rendering HeroSection component */}
//         <HeroSection mediaType="Movie" />

//         {/* Mapping through genres and rendering SliderRowForGenre for each */}
//         {[...COMMON_TITLES, ...genres].map((genre) => (
//           <SliderRowForGenre
//             key={genre.id || genre.name}
//             genre={genre}
//             mediaType="Movie"
//           />
//         ))}
//       </Stack>
//     );
//   }

  // Return null if data retrieval is not successful or no genres are present
//   return null;
// }

// // Adding displayName property to the component
// Component.displayName = "HomePage";
