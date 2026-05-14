document.getElementById("generate").addEventListener("click", updateBanner);
document.getElementById("export").addEventListener("click", exportHTML);
document.getElementById("copyHtml").addEventListener("click", copyHTML);
document
  .getElementById("bannerSize")
  .addEventListener("change", toggleCustomSizeFields);

function toggleCustomSizeFields() {
  const customFields = document.getElementById("custom-size-fields");
  customFields.style.display =
    document.getElementById("bannerSize").value === "custom" ? "block" : "none";
}

function updateBanner() {
  const banner = document.getElementById("banner");
  const text = document.getElementById("bannerText").value;
  const textColor = document.getElementById("textColor").value;
  const textSize = document.getElementById("textSize").value;

  // Set predefined banner sizes
  let [width, height] = document.getElementById("bannerSize").value.split("x");
  if (document.getElementById("bannerSize").value === "custom") {
    width = document.getElementById("customWidth").value + "px";
    height = document.getElementById("customHeight").value + "px";
  } else {
    width += "px";
    height += "px";
  }

  banner.style.width = width;
  banner.style.height = height;
  banner.style.color = textColor;
  banner.style.fontSize = textSize;
  banner.style.display = "flex";
  banner.style.alignItems = "center";
  banner.style.justifyContent = "center";
  banner.style.fontWeight = "bold";
  banner.textContent = text;

  // Use a standard background image
  banner.style.backgroundImage = "url('https://via.placeholder.com/1200x600')";
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";
}

// Export HTML & CSS
function exportHTML() {
  const text = document.getElementById("bannerText").value;
  const textColor = document.getElementById("textColor").value;
  const textSize = document.getElementById("textSize").value;
  let [width, height] = document.getElementById("bannerSize").value.split("x");

  if (document.getElementById("bannerSize").value === "custom") {
    width = document.getElementById("customWidth").value + "px";
    height = document.getElementById("customHeight").value + "px";
  } else {
    width += "px";
    height += "px";
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Banner</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="banner">${text}</div>
</body>
</html>`;

  const cssContent = `
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}
.banner {
    width: ${width};
    height: ${height};
    background-image: url('https://www.snapav.com/wcsstore/ExtendedSitesCatalogAssetStore/attachments/images/Banners/533_24_HaloFW%202.0%20Launch_Category_notext.png');
    background-size: cover;
    background-position: center;
    color: ${textColor};
    font-size: ${textSize};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}`;

  downloadFile("banner.html", htmlContent);
  downloadFile("styles.css", cssContent);
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

// Copy HTML to Clipboard
function copyHTML() {
  let [width, height] = document.getElementById("bannerSize").value.split("x");
  const text = document.getElementById("bannerText").value;
  const textColor = document.getElementById("textColor").value;
  const textSize = document.getElementById("textSize").value;

  if (document.getElementById("bannerSize").value === "custom") {
    width = document.getElementById("customWidth").value + "px";
    height = document.getElementById("customHeight").value + "px";
  } else {
    width += "px";
    height += "px";
  }

  const htmlCode = `
<div class="banner">${text}</div>

<style>
    .banner {
        width: ${width};
        height: ${height};
        background-image: url('https://via.placeholder.com/1200x600');
        background-size: cover;
        background-position: center;
        color: ${textColor};
        font-size: ${textSize};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
</style>`;

  navigator.clipboard
    .writeText(htmlCode)
    .then(() => {
      alert("HTML copied to clipboard!");
    })
    .catch((err) => console.error("Failed to copy:", err));
}
