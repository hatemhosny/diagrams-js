const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateSocialCard() {
  const svgPath = path.join(__dirname, "..", "static", "img", "social-card.svg");
  const outputPath = path.join(__dirname, "..", "static", "img", "docusaurus-social-card.jpg");

  try {
    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Convert to JPG with high quality
    await sharp(svgBuffer)
      .resize(1200, 630, {
        fit: "contain",
        background: { r: 26, g: 26, b: 46 },
      })
      .jpeg({
        quality: 95,
        chromaSubsampling: "4:4:4",
      })
      .toFile(outputPath);

    console.log("Social card generated successfully!");
    console.log(`Output: ${outputPath}`);
  } catch (error) {
    console.error("Error generating social card:", error);
    process.exit(1);
  }
}

generateSocialCard();
