import { useState } from "react";
import { places } from "./data/places";
import { Header } from "./components/Header";
import { PhotoCardList } from "./components/PhotoCardList";
import { SearchBar } from "./components/SearchBar";
import { LikedCounterBox } from "./components/LikedCounterBox";
import { JoinPhotoClubButton } from "./components/JoinPhotoClubButton";
import { FormCommunity } from "./components/FormCommunity";
import cls from "./components/form.module.css";

function App() {
  const [photos, setPhotos] = useState(places);
  const [isShowForm, setIsShowForm] = useState(false);
  const [filterValue, setFilterValue] = useState("");

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
    <div className="body">
      <Header />
      <SearchBar setFilterValue={setFilterValue} />
      <LikedCounterBox count={likedPhotosCount} />
      <PhotoCardList
        photos={photos}
        handleLikedPhoto={handleLikedPhoto}
        filterValue={filterValue}
      />
      <JoinPhotoClubButton setIsShowForm={setIsShowForm} />
      <div className={isShowForm ? cls.showForm : cls.hiddenForm}>
        <FormCommunity setIsShowForm={setIsShowForm} />
      </div>
    </div>
  );
}

export default App;
