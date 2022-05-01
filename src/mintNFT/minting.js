import Big from 'big.js';

export const mintNFT = async (donationAmount) => {
    
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-recycle-tok`,
        metadata: {
          title: "Donation to animals in Ukrain",
          description: "Animal Rescuer",
          media:
            "https://bafkreifkuskpezdnn3m3jm5tf2ygkpcbwz2wijv4cozc5f3j6jdqvh7wru.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      Big(donationAmount || '0').times(10 ** 24).toFixed()
    );
};
