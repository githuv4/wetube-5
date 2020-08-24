import { videos } from "../db";

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

export const upload = (req, res) => {
  res.render("upload", { pageTitle: "Upload a video" });
};

export const ediitVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "Edit Video" });
};

export const deleteVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "Delete Video" });
};
