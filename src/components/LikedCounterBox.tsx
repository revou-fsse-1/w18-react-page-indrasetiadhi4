import cls from "../App.module.css";

type LikedPhotosProps = {
  count: number;
};

export function LikedCounterBox(props: LikedPhotosProps) {
  return (
    <div className={cls.likedCounter}>
      <span>My Liked Photos ({props.count})</span>
    </div>
  );
}
