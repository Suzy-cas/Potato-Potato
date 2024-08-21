/* eslint-disable react/prop-types */
function UploadPicture({ inputRef, setThumbnail }) {
  const handleChangeThumbnail = (e) => {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/png"
    ) {
      setThumbnail(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <label className="FileUploadLabel">
      Photo
      <p />
      <input
        type="file"
        name="recipePicture"
        accept="image/png, image/jpeg"
        onChange={handleChangeThumbnail}
        ref={inputRef}
      />
    </label>
  );
}
export default UploadPicture;
