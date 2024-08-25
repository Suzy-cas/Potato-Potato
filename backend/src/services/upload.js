/* eslint-disable consistent-return */
const fs = require("fs");
const path = require("path");

const uploadRecipePictures = (req, res) => {
  const { file } = req;
  const { id } = req.params;

  if (!file) {
    console.error("Aucun fichier téléchargé");
    return res.status(400).send("Aucun fichier n'a été téléchargé.");
  }

  const { filename } = file;
  const targetPath = path.join(
    __dirname,
    `../../public/uploads/recipes/${id}.jpg`
  );

  fs.rename(
    path.join(__dirname, `../../public/uploads/recipes/${filename}`),
    targetPath,
    (err) => {
      if (err) {
        console.error("Erreur lors du renommage du fichier :", err);
        return res.status(500).send("Erreur lors du traitement du fichier.");
      }
      res.send("Fichier téléchargé et renommé avec succès.");
    }
  );
};

module.exports = {
  uploadRecipePictures,
};
