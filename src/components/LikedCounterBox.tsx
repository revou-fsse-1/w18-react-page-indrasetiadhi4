type LikedPhotosProps = {
  count: number;
};

export function LikedCounterBox(props: LikedPhotosProps) {
  return (
    <div>
      <span>My Liked Photos ({props.count})</span>
    </div>
  );
}
