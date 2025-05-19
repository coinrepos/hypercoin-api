
import { ethers } from 'ethers';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end("Method not allowed");

  const { to, amount } = req.body;
  const provider = new ethers.JsonRpcProvider(process.env.RSK_RPC_URL);
  const wallet = new ethers.Wallet(process.env.RSK_PRIVATE_KEY, provider);

  const contractAddress = process.env.HYPERCOIN_CONTRACT;
  const abi = [ "function mint(address to, uint256 amount) public returns (bool)" ];
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  try {
    const tx = await contract.mint(to, amount);
    await tx.wait();
    res.status(200).json({ tx_hash: tx.hash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
