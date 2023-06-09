import cls from "../App.module.css";

type PhotoCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  isLiked: boolean;
  handleLikedPhoto: (id: number, isLiked: boolean) => void;
};

export function PhotoCard(props: PhotoCardProps) {
  // const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className={cls.photoCard}>
      {props.isLiked ? (
        <div className={cls.likedButton}>
          <span onClick={() => props.handleLikedPhoto(props.id, false)}>
            <p>LIKED</p>
          </span>
        </div>
      ) : (
        <div className={cls.likeButton}>
          <span onClick={() => props.handleLikedPhoto(props.id, true)}>
            <p>LIKE</p>
          </span>
        </div>
      )}

      <img src={props.imageUrl} />
      <h3>{props.title}</h3>
    </div>
  );
}
