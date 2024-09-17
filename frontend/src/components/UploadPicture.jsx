/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

function UploadPicture({ inputRef, setThumbnail }) {
  const handleChangeThumbnail = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png")
    ) {
      setThumbnail(URL.createObjectURL(file));
    } else {
      console.warn(
        "Le fichier sélectionné n'est pas valide. Veuillez choisir un fichier JPEG ou PNG."
      );
    }
  };

  return (
    <label>
      <p />
      photo
      <input
        className="primary-button"
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
