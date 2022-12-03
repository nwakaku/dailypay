// import { Web3Storage } from "web3.storage";
import axios from "axios";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min"; // webpack 4


function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNTM4NjIzMDYsIm5hbWUiOiJkZWMifQ.6WiJWKBpItONv2J3nfB__mcMsnGdEXEm0tzgowBkGLE";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const ipfsUrl = (cid, fileName) => {
  let url = `https:${cid}.ipfs.w3s.link`;
  if (fileName) {
    return `${url}/${fileName}`;
  }
  return url;
};

export async function storeFiles(files) {
  console.log("store", files);
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

export function fetchMetadata(cid) {
  const url = `${ipfsUrl(cid)}/metadata.json`;
  return axios.get(url);
}

export async function retrieveFiles(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...

  return res;
}
