type JoinPhotoClubButtonProps = {
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export function JoinPhotoClubButton(props: JoinPhotoClubButtonProps) {
  return (
    <div>
      <button onClick={() => props.setIsShowForm(true)}>
        Join Photo Club Membership
      </button>
    </div>
  );
}
