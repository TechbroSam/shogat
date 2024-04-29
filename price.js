import Moralis from "moralis";
import { SolNetwork } from "@moralisweb3/common-sol-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjI4YzRjYzc5LWYyMDYtNDIwYy04ZmI4LThmYWQyZmY4NDhmYyIsIm9yZ0lkIjoiMzY4ODYyIiwidXNlcklkIjoiMzc5MDk4IiwidHlwZUlkIjoiNjhlNGE1YWUtNGRiYi00ZmM3LWFkZjYtZjVmNGExNjRkNzE1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDMwMTAzNTMsImV4cCI6NDg1ODc3MDM1M30.BDM922jyo3k6BVW6b8sQmsEsu9I1OC-aPfwVTcRfquY"
  });

  const address = "5H3nkjit3uBQkKDwbbNEm79oPtonr1UwKX7yW1oU9HDc";

  const network = SolNetwork.MAINNET;

  const response = await Moralis.SolApi.token.getTokenPrice({
    address,
    network,
  });

   // Update the DOM with the fetched price
  document.getElementById("token-price1").innerText = '$' + response.get("price");
};

// Run the runApp function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  runApp();
});