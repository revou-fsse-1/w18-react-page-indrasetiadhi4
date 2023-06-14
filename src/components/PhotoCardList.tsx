import cls from "../App.module.css";
import { PhotoCard } from "./PhotoCard";

type PhotoCardListProps = {
  photos: {
    id: number;
    title: string;
    imageUrl: string;
    isLiked: boolean;
  }[];
  handleLikedPhoto: (id: number, isLiked: boolean) => void;
  filterValue: string;
};

export function PhotoCardList(props: PhotoCardListProps) {
  const filteredPhotos = props.photos.filter((photo) =>
    photo.title.toLowerCase().includes(props.filterValue.toLowerCase())
  );

  return (
    <div className={cls.photoListContainer}>
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          title={photo.title}
          imageUrl={photo.imageUrl}
          isLiked={photo.isLiked}
          handleLikedPhoto={props.handleLikedPhoto}
        />
      ))}
    </div>
  );
}
