const Moralis = require("moralis").default;
const { SolNetwork } = require("@moralisweb3/common-sol-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjI4YzRjYzc5LWYyMDYtNDIwYy04ZmI4LThmYWQyZmY4NDhmYyIsIm9yZ0lkIjoiMzY4ODYyIiwidXNlcklkIjoiMzc5MDk4IiwidHlwZUlkIjoiNjhlNGE1YWUtNGRiYi00ZmM3LWFkZjYtZjVmNGExNjRkNzE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDMwMTAzNTMsImV4cCI6NDg1ODc3MDM1M30.BDM922jyo3k6BVW6b8sQmsEsu9I1OC-aPfwVTcRfquY",
    // ...and any other configuration
  });

  const address = "BG5Dp9gU5WbkHEaz6y95apb5NVPw3jC17M4ro27sgSXP";

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.token.getTokenPrice({
    address,
    network,
  });

   // Update the DOM with the fetched price
  document.getElementById("token-price").innerText = '$' + response.get("price");
};

// Run the runApp function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  runApp();
});