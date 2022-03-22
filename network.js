export default {
  id: 'desmos-mainnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Desmos',
  description:
    'A blockchain which serves as the backbone to empower the development of user-centric social networks.',
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
      gasEstimate: 20000,
      feeOptions: [
        {
          denom: 'DSM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://letsrunsomefuckingnode.com/assets/images/desmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}