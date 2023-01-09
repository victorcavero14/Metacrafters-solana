const createMetadataTransaction = new CreateMetadataV2(
  { feePayer: publicKey },
  {
    metadata: metadataPDA,
    metadataData: tokenMetadata,
    updateAuthority: publicKey,
    mint: mintKeypair.publicKey,
    mintAuthority: publicKey,
  }
);
