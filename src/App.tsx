import "./App.css";
import { useState } from "react";
import { places } from "./data/places";
import { Header } from "./components/Header";
import { PhotoCardList } from "./components/PhotoCardList";
import { SearchBar } from "./components/SearchBar";
import { LikedCounterBox } from "./components/LikedCounterBox";
import { JoinPhotoClubButton } from "./components/JoinPhotoClubButton";

function App() {
  const [photos, setPhotos] = useState(places);

  function handleLikedPhoto(id: number, isLiked: boolean) {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        photo.isLiked = isLiked;
      }
      return photo;
    });
    setPhotos(newPhotos);
  }

  const likedPhotosCount = photos.filter((photo) => photo.isLiked).length;

  return (
    <>
      <Header />
      <SearchBar />
      <LikedCounterBox count={likedPhotosCount} />
      <PhotoCardList photos={photos} handleLikedPhoto={handleLikedPhoto} />
      <JoinPhotoClubButton />
      {/* <FormCommunity /> */}
    </>
  );
}

export default App;
