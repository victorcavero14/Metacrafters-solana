# Create SPL-TOKEN

## Using CLI

This is a guide on how to create an SPL token on Solana using the Solana command-line interface (CLI). It also includes information on uploading metadata of the token and creating the SPL token from a user interface. Finally, the guide provides instructions on creating a candy machine using the Sugar deployment tool.

Here are the steps to create an SPL token using the Solana CLI:

Set the Solana API URL: solana config set --url https://api.devnet.solana.com

Create the token: spl-token create-token

Create an account for the token: spl-token create-account
4htLBM1awfnhD6VpGLksEo4Gmu5ZqpFPreWiXzNuST3x

Mint some tokens for the account: spl-token mint 4htLBM1awfnhD6VpGLksEo4Gmu5ZqpFPreWiXzNuST3x 100

Disable minting for the account: spl-token authorize 4htLBM1awfnhD6VpGLksEo4Gmu5ZqpFPreWiXzNuST3x mint --disable

To upload metadata for the token, go to the following URL: https://app.strataprotocol.com/edit-metadata.

or implement by yourself the function updateMetadataV2

## Using UI (Recommended by solana labs)

It is recommended to follow the guidelines at https://github.com/solana-labs/token-list when creating an SPL token on Solana.

To create an SPL token from a user interface, go to one of the following URLs:

- https://app.strataprotocol.com/launchpad/manual/new?cluster=devnet
- https://token-creator-lac.vercel.app

After creating the token, I am using: FtfjYbdQRcqxMvsKDvCnkSX8fP5EuEUxqHC5nTutWqNW

# Create Candy Machine

To create a candy machine, you will need to add the SPL token ID to the config.json file. The config.json file is used by the Sugar deployment tool to configure the candy machine. You can find more information on the config.json file at https://docs.metaplex.com/developer-tools/sugar/reference/configuration. Make sure not to include the sol-treasury-account in the config.json file.

To deploy the candy machine, run the following commands:

- sugar upload
- sugar deploy (candy machine: 4d6otPtrP1CRRUALwhmYAfdXoumyd7cC9zL7wmAsyCrp)
- sugar verify

# Using candy machine UI

Modify the .env with this candy machine obtained from the previous step

```
REACT_APP_CANDY_MACHINE_ID=4d6otPtrP1CRRUALwhmYAfdXoumyd7cC9zL7wmAsyCrp

REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_SOLANA_RPC_HOST=https://metaplex.devnet.rpcpool.com/
SKIP_PREFLIGHT_CHECK=true
```
