import { PhotoCard } from "./PhotoCard";

type PhotoCardListProps = {
  photos: {
    id: number;
    title: string;
    imageUrl: string;
    isLiked: boolean;
  }[];
  handleLikedPhoto: (id: number, isLiked: boolean) => void;
};

export function PhotoCardList(props: PhotoCardListProps) {
  return (
    <div>
      {props.photos.map((photo) => (
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
