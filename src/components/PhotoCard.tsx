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
        <div
          className={cls.likedButton}
          onClick={() => props.handleLikedPhoto(props.id, false)}
        >
          <span>
            <p>LIKED</p>
          </span>
        </div>
      ) : (
        <div
          className={cls.likeButton}
          onClick={() => props.handleLikedPhoto(props.id, true)}
        >
          <span>
            <p>LIKE</p>
          </span>
        </div>
      )}

      <img src={props.imageUrl} />
      <h3>{props.title}</h3>
    </div>
  );
}
