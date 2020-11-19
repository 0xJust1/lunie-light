export default {
  id: 'cosmos-testnet',
  name: 'Cosmos Stargate',
  description:
    'Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.',
  logo: `logo.svg`,
  website: 'https://cosmos.network',
  apiURL:
    'https://api.allorigins.win/raw?url=https://rest.gaiasg4.hub.hackatom.dev/',
  rpcURL: 'https://rpc.gaiasg4.hub.hackatom.dev/',
  stakingDenom: 'ATOM',
  coinLookup: [
    {
      viewDenom: 'ATOM',
      chainDenom: 'uatom',
      chainToViewConversionFactor: 1e-6,
    },
  ],
  addressPrefix: 'cosmos',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'ATOM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: '~/assets/images/currencies/atom.png',
  localSigning: false,
}
