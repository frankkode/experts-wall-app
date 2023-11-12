
const uploadImageToCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "iu-portfolio-project");
  uploadData.append("cloud_name", "iu-portfolio");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/iu-portfolio/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
