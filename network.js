export default {
  id: 'desmos-mainnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Aura',
  description:
    'Cosmos is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'https://desmos.network',
  apiURL: 'https://t7qxrf.deta.dev', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'https://rpc.mainnet.desmos.network',
  stakingDenom: 'DSM',
  coinLookup: [
    {
      viewDenom: 'DSM',
      chainDenom: 'udsm',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'desmos',
  validatorAddressPrefix: 'desmosvaloper',
  validatorConsensusaddressPrefix: 'desmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `14 days`,
  fees: {
    default: {
      gasEstimate: 80000,
      feeOptions: [
        {
          denom: 'DSM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
