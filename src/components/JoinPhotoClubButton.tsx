import cls from "../App.module.css";

type JoinPhotoClubButtonProps = {
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export function JoinPhotoClubButton(props: JoinPhotoClubButtonProps) {
  return (
    <div className={cls.joinButton}>
      <button onClick={() => props.setIsShowForm(true)}>
        Join Photo Club Membership
      </button>
    </div>
  );
}
