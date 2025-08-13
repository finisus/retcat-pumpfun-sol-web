// execute after dom load
document.addEventListener("DOMContentLoaded", function () {
  // copy button logic
  const copyButton = document.getElementById("copy-ca-button");
  const textToCopy = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  // links
  const twitterBtn = document.getElementById("twitter-button");
  twitterBtn.addEventListener("click", function () {
    window.open("https://x.com/", "_blank");
  });

  const telegramBtn = document.getElementById("telegram-button");
  telegramBtn.addEventListener("click", function () {
    window.open("https://t.me/", "_blank");
  });

  const chartBtn = document.getElementById("chart-button");
  chartBtn.addEventListener("click", function () {
    window.open("https://dexscreener.com/solana/", "_blank");
  });

  const buyBtn = document.getElementById("buy-button");
  buyBtn.addEventListener("click", function () {
    window.open(
      "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "_blank",
    );
  });
});

