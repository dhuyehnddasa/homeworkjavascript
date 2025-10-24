function upDate(previewPic) {
  console.log("Hover event triggered!");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = previewPic.alt;

  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";

  imageDiv.innerHTML = "Hover over an image below to display here.";
}
