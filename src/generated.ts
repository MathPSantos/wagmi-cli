import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Launchpad
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const launchpadAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LAUNCHPAD_PRODUCT_ID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'investor', internalType: 'address', type: 'address' }],
    name: 'addInvestorToLaunchPad',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'input',
        internalType: 'struct ILaunchPadCommon.CreateLaunchPadInput',
        type: 'tuple',
        components: [
          {
            name: 'launchPadType',
            internalType: 'enum ILaunchPadCommon.LaunchPadType',
            type: 'uint8',
          },
          {
            name: 'launchPadInfo',
            internalType: 'struct ILaunchPadCommon.LaunchPadInfo',
            type: 'tuple',
            components: [
              { name: 'owner', internalType: 'address', type: 'address' },
              {
                name: 'tokenAddress',
                internalType: 'address',
                type: 'address',
              },
              {
                name: 'paymentTokenAddress',
                internalType: 'address',
                type: 'address',
              },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
              {
                name: 'fundTarget',
                internalType: 'struct ILaunchPadCommon.FundTarget',
                type: 'tuple',
                components: [
                  { name: 'softCap', internalType: 'uint256', type: 'uint256' },
                  { name: 'hardCap', internalType: 'uint256', type: 'uint256' },
                ],
              },
              {
                name: 'maxInvestPerWallet',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'startTimestamp',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'duration', internalType: 'uint256', type: 'uint256' },
              {
                name: 'tokenCreationDeadline',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'refundInfo',
                internalType: 'struct ILaunchPadCommon.RefundInfo',
                type: 'tuple',
                components: [
                  {
                    name: 'penaltyFeePercent',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  {
                    name: 'expireDuration',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
              {
                name: 'idoInfo',
                internalType: 'struct ILaunchPadCommon.IdoInfo',
                type: 'tuple',
                components: [
                  { name: 'enabled', internalType: 'bool', type: 'bool' },
                  {
                    name: 'dexRouter',
                    internalType: 'address',
                    type: 'address',
                  },
                  {
                    name: 'pairToken',
                    internalType: 'address',
                    type: 'address',
                  },
                  { name: 'price', internalType: 'uint256', type: 'uint256' },
                  {
                    name: 'amountToList',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'releaseSchedule',
            internalType: 'struct ILaunchPadCommon.ReleaseScheduleV2[]',
            type: 'tuple[]',
            components: [
              { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
              { name: 'percent', internalType: 'uint256', type: 'uint256' },
              { name: 'isVesting', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'createErc20Input',
            internalType: 'struct ILaunchPadCommon.CreateErc20Input',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'logo', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
              { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
              { name: 'owner', internalType: 'address', type: 'address' },
              {
                name: 'treasuryReserved',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'isSuperchargerEnabled', internalType: 'bool', type: 'bool' },
          { name: 'feePercentage', internalType: 'uint256', type: 'uint256' },
          {
            name: 'paymentTokenAddress',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
    name: 'createLaunchPad',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'storeInput',
        internalType: 'struct ILaunchPadCommon.CreateLaunchPadInput',
        type: 'tuple',
        components: [
          {
            name: 'launchPadType',
            internalType: 'enum ILaunchPadCommon.LaunchPadType',
            type: 'uint8',
          },
          {
            name: 'launchPadInfo',
            internalType: 'struct ILaunchPadCommon.LaunchPadInfo',
            type: 'tuple',
            components: [
              { name: 'owner', internalType: 'address', type: 'address' },
              {
                name: 'tokenAddress',
                internalType: 'address',
                type: 'address',
              },
              {
                name: 'paymentTokenAddress',
                internalType: 'address',
                type: 'address',
              },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
              {
                name: 'fundTarget',
                internalType: 'struct ILaunchPadCommon.FundTarget',
                type: 'tuple',
                components: [
                  { name: 'softCap', internalType: 'uint256', type: 'uint256' },
                  { name: 'hardCap', internalType: 'uint256', type: 'uint256' },
                ],
              },
              {
                name: 'maxInvestPerWallet',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'startTimestamp',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'duration', internalType: 'uint256', type: 'uint256' },
              {
                name: 'tokenCreationDeadline',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'refundInfo',
                internalType: 'struct ILaunchPadCommon.RefundInfo',
                type: 'tuple',
                components: [
                  {
                    name: 'penaltyFeePercent',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                  {
                    name: 'expireDuration',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
              {
                name: 'idoInfo',
                internalType: 'struct ILaunchPadCommon.IdoInfo',
                type: 'tuple',
                components: [
                  { name: 'enabled', internalType: 'bool', type: 'bool' },
                  {
                    name: 'dexRouter',
                    internalType: 'address',
                    type: 'address',
                  },
                  {
                    name: 'pairToken',
                    internalType: 'address',
                    type: 'address',
                  },
                  { name: 'price', internalType: 'uint256', type: 'uint256' },
                  {
                    name: 'amountToList',
                    internalType: 'uint256',
                    type: 'uint256',
                  },
                ],
              },
            ],
          },
          {
            name: 'releaseSchedule',
            internalType: 'struct ILaunchPadCommon.ReleaseScheduleV2[]',
            type: 'tuple[]',
            components: [
              { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
              { name: 'percent', internalType: 'uint256', type: 'uint256' },
              { name: 'isVesting', internalType: 'bool', type: 'bool' },
            ],
          },
          {
            name: 'createErc20Input',
            internalType: 'struct ILaunchPadCommon.CreateErc20Input',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'logo', internalType: 'string', type: 'string' },
              { name: 'decimals', internalType: 'uint8', type: 'uint8' },
              { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
              { name: 'owner', internalType: 'address', type: 'address' },
              {
                name: 'treasuryReserved',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'isSuperchargerEnabled', internalType: 'bool', type: 'bool' },
          { name: 'feePercentage', internalType: 'uint256', type: 'uint256' },
          {
            name: 'paymentTokenAddress',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
      {
        name: 'crossPaymentSignatureInput',
        internalType: 'struct ICrossPaymentModule.CrossPaymentSignatureInput',
        type: 'tuple',
        components: [
          { name: 'payer', internalType: 'address', type: 'address' },
          { name: 'sourceChainId', internalType: 'uint256', type: 'uint256' },
          { name: 'paymentIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'createLaunchPadWithPaymentSignature',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPadAddress', internalType: 'address', type: 'address' },
    ],
    name: 'createLaunchpadV2LiquidityPool',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPadAddress', internalType: 'address', type: 'address' },
    ],
    name: 'createTokenAfterICO',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getLaunchPadCountByOwner',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLaunchPadMaxDurationIncrement',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPadAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getLaunchPadTokenInfo',
    outputs: [
      {
        name: 'createErc20Input',
        internalType: 'struct ILaunchPadCommon.CreateErc20Input',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'logo', internalType: 'string', type: 'string' },
          { name: 'decimals', internalType: 'uint8', type: 'uint8' },
          { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'treasuryReserved',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLaunchPadsByInvestorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'investor', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
      { name: 'page', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLaunchPadsByInvestorPaginated',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
      { name: 'page', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLaunchPadsByOwnerPaginated',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLaunchPadsCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'quantity', internalType: 'uint256', type: 'uint256' },
      { name: 'page', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLaunchPadsPaginated',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaxTokenCreationDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSignerAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'getSuperChargerHeadstartByTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperChargerHeadstarts',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'getSuperChargerMultiplierByTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'getSuperChargerTokensPercByTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'launchpad', internalType: 'address', type: 'address' }],
    name: 'removeLaunchpad',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPad', internalType: 'address', type: 'address' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setExistingTokenAfterICO',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPad', internalType: 'address', type: 'address' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setExistingTokenAfterTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'launchPad', internalType: 'address', type: 'address' }],
    name: 'setLaunchpadImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPad', internalType: 'address', type: 'address' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'transferLaunchpadDiamondOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newMaxDurationIncrement',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'updateLaunchPadMaxDurationIncrement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'updateLaunchPadOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newLaunchpadImplementation',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'updateLaunchpadImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newMaxTokenCreationDeadline',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'updateMaxTokenCreationDeadline',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newSignerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateSignerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'launchPad', internalType: 'address', type: 'address' },
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
      },
      { name: '_init', internalType: 'address', type: 'address' },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeLaunchPadProjectFacets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const launchpadAddress =
  '0xb8d8701589cE9cecbCEdc8DbDAdff30E987Ee0e8' as const

export const launchpadConfig = {
  address: launchpadAddress,
  abi: launchpadAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LaunchpadProject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const launchpadProjectAbi = [
  {
    type: 'function',
    inputs: [{ name: 'tokenAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'buyTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'input',
        internalType: 'struct ILaunchPadProject.BuyTokenInput',
        type: 'tuple',
        components: [
          { name: 'tokenAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'tier', internalType: 'uint256', type: 'uint256' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'buyTokensWithSupercharger',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'tier', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'checkSignature',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'sourceChainId', internalType: 'uint256', type: 'uint256' },
      { name: 'paymentIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'checkSignatureForCrossPayment',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'checkSignatureForRefund',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'input',
        internalType:
          'struct ILaunchPadProject.ClaimTokenWithSuperchargerInput',
        type: 'tuple',
        components: [
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'claimTokensWithSupercharger',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllInvestors',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFeeShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'getHardCapPerTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getInvestorAddressByIndex',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInvestorsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInvestorsRefundedCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLaunchPadAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLaunchPadInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct ILaunchPadCommon.LaunchPadInfo',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          {
            name: 'paymentTokenAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          {
            name: 'fundTarget',
            internalType: 'struct ILaunchPadCommon.FundTarget',
            type: 'tuple',
            components: [
              { name: 'softCap', internalType: 'uint256', type: 'uint256' },
              { name: 'hardCap', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'maxInvestPerWallet',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'startTimestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'duration', internalType: 'uint256', type: 'uint256' },
          {
            name: 'tokenCreationDeadline',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'refundInfo',
            internalType: 'struct ILaunchPadCommon.RefundInfo',
            type: 'tuple',
            components: [
              {
                name: 'penaltyFeePercent',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'expireDuration',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'idoInfo',
            internalType: 'struct ILaunchPadCommon.IdoInfo',
            type: 'tuple',
            components: [
              { name: 'enabled', internalType: 'bool', type: 'bool' },
              { name: 'dexRouter', internalType: 'address', type: 'address' },
              { name: 'pairToken', internalType: 'address', type: 'address' },
              { name: 'price', internalType: 'uint256', type: 'uint256' },
              {
                name: 'amountToList',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tier', internalType: 'uint256', type: 'uint256' }],
    name: 'getMaxInvestPerWalletPerTier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaxInvestorsToRefund',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getNextNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProjectOwnerRole',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getPurchasedInfoByUser',
    outputs: [
      {
        name: '',
        internalType: 'struct ILaunchPadProject.PurchasedInfo',
        type: 'tuple',
        components: [
          {
            name: 'purchasedTokenAmount',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'claimedTokenAmount',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paidTokenAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReleaseSchedule',
    outputs: [
      {
        name: '',
        internalType: 'struct ILaunchPadCommon.ReleaseScheduleV2[]',
        type: 'tuple[]',
        components: [
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'percent', internalType: 'uint256', type: 'uint256' },
          { name: 'isVesting', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReleasedTokensPercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRemainingInvestorsToRefund',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenCreationDeadline',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getTokensAvailableToBeClaimed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalRaised',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isSuperchargerEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokenAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'processRefund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'processRefundOnSoftCapFailure',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokenAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'processRefundOnTokenCreationExpired',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'message', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'recoverSigner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundAllInvestors',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundOnSoftCapFailure',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'refundOnTokenCreationExpired',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'input',
        internalType: 'struct ILaunchPadProject.RefundWithSuperchargerInput',
        type: 'tuple',
        components: [
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'refundOnUnstakedDuringSales',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokenAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'sourceChainId', internalType: 'uint256', type: 'uint256' },
      { name: 'paymentIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'reserveTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'maxInvestorsUpdate', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMaxInvestorsToRefund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenDecimals',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalTokensClaimed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalTokensSold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__
 */
export const useReadLaunchpadEvm = /*#__PURE__*/ createUseReadContract({
  abi: launchpadAbi,
  address: launchpadAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"LAUNCHPAD_PRODUCT_ID"`
 */
export const useReadLaunchpadLaunchpadProductIdEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'LAUNCHPAD_PRODUCT_ID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadCountByOwner"`
 */
export const useReadLaunchpadGetLaunchPadCountByOwnerEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadCountByOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadMaxDurationIncrement"`
 */
export const useReadLaunchpadGetLaunchPadMaxDurationIncrementEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadMaxDurationIncrement',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadTokenInfo"`
 */
export const useReadLaunchpadGetLaunchPadTokenInfoEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadTokenInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadsByInvestorCount"`
 */
export const useReadLaunchpadGetLaunchPadsByInvestorCountEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadsByInvestorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadsByInvestorPaginated"`
 */
export const useReadLaunchpadGetLaunchPadsByInvestorPaginatedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadsByInvestorPaginated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadsByOwnerPaginated"`
 */
export const useReadLaunchpadGetLaunchPadsByOwnerPaginatedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadsByOwnerPaginated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadsCount"`
 */
export const useReadLaunchpadGetLaunchPadsCountEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadsCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getLaunchPadsPaginated"`
 */
export const useReadLaunchpadGetLaunchPadsPaginatedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getLaunchPadsPaginated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getMaxTokenCreationDeadline"`
 */
export const useReadLaunchpadGetMaxTokenCreationDeadlineEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getMaxTokenCreationDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadLaunchpadGetRoleAdminEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getRoleMember"`
 */
export const useReadLaunchpadGetRoleMemberEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getRoleMemberCount"`
 */
export const useReadLaunchpadGetRoleMemberCountEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getSignerAddress"`
 */
export const useReadLaunchpadGetSignerAddressEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getSignerAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getSuperChargerHeadstartByTier"`
 */
export const useReadLaunchpadGetSuperChargerHeadstartByTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getSuperChargerHeadstartByTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getSuperChargerHeadstarts"`
 */
export const useReadLaunchpadGetSuperChargerHeadstartsEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getSuperChargerHeadstarts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getSuperChargerMultiplierByTier"`
 */
export const useReadLaunchpadGetSuperChargerMultiplierByTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getSuperChargerMultiplierByTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"getSuperChargerTokensPercByTier"`
 */
export const useReadLaunchpadGetSuperChargerTokensPercByTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'getSuperChargerTokensPercByTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadLaunchpadHasRoleEvm = /*#__PURE__*/ createUseReadContract({
  abi: launchpadAbi,
  address: launchpadAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__
 */
export const useWriteLaunchpadEvm = /*#__PURE__*/ createUseWriteContract({
  abi: launchpadAbi,
  address: launchpadAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"addInvestorToLaunchPad"`
 */
export const useWriteLaunchpadAddInvestorToLaunchPadEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'addInvestorToLaunchPad',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchPad"`
 */
export const useWriteLaunchpadCreateLaunchPadEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchPad',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchPadWithPaymentSignature"`
 */
export const useWriteLaunchpadCreateLaunchPadWithPaymentSignatureEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchPadWithPaymentSignature',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchpadV2LiquidityPool"`
 */
export const useWriteLaunchpadCreateLaunchpadV2LiquidityPoolEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchpadV2LiquidityPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createTokenAfterICO"`
 */
export const useWriteLaunchpadCreateTokenAfterIcoEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createTokenAfterICO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteLaunchpadGrantRoleEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"removeLaunchpad"`
 */
export const useWriteLaunchpadRemoveLaunchpadEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'removeLaunchpad',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteLaunchpadRenounceRoleEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteLaunchpadRevokeRoleEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setExistingTokenAfterICO"`
 */
export const useWriteLaunchpadSetExistingTokenAfterIcoEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setExistingTokenAfterICO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setExistingTokenAfterTransfer"`
 */
export const useWriteLaunchpadSetExistingTokenAfterTransferEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setExistingTokenAfterTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setLaunchpadImplementation"`
 */
export const useWriteLaunchpadSetLaunchpadImplementationEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setLaunchpadImplementation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"transferLaunchpadDiamondOwnership"`
 */
export const useWriteLaunchpadTransferLaunchpadDiamondOwnershipEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'transferLaunchpadDiamondOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchPadMaxDurationIncrement"`
 */
export const useWriteLaunchpadUpdateLaunchPadMaxDurationIncrementEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchPadMaxDurationIncrement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchPadOwner"`
 */
export const useWriteLaunchpadUpdateLaunchPadOwnerEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchPadOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchpadImplementation"`
 */
export const useWriteLaunchpadUpdateLaunchpadImplementationEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchpadImplementation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateMaxTokenCreationDeadline"`
 */
export const useWriteLaunchpadUpdateMaxTokenCreationDeadlineEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateMaxTokenCreationDeadline',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateSignerAddress"`
 */
export const useWriteLaunchpadUpdateSignerAddressEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateSignerAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"upgradeLaunchPadProjectFacets"`
 */
export const useWriteLaunchpadUpgradeLaunchPadProjectFacetsEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'upgradeLaunchPadProjectFacets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__
 */
export const useSimulateLaunchpadEvm = /*#__PURE__*/ createUseSimulateContract({
  abi: launchpadAbi,
  address: launchpadAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"addInvestorToLaunchPad"`
 */
export const useSimulateLaunchpadAddInvestorToLaunchPadEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'addInvestorToLaunchPad',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchPad"`
 */
export const useSimulateLaunchpadCreateLaunchPadEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchPad',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchPadWithPaymentSignature"`
 */
export const useSimulateLaunchpadCreateLaunchPadWithPaymentSignatureEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchPadWithPaymentSignature',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createLaunchpadV2LiquidityPool"`
 */
export const useSimulateLaunchpadCreateLaunchpadV2LiquidityPoolEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createLaunchpadV2LiquidityPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"createTokenAfterICO"`
 */
export const useSimulateLaunchpadCreateTokenAfterIcoEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'createTokenAfterICO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateLaunchpadGrantRoleEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"removeLaunchpad"`
 */
export const useSimulateLaunchpadRemoveLaunchpadEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'removeLaunchpad',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateLaunchpadRenounceRoleEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateLaunchpadRevokeRoleEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setExistingTokenAfterICO"`
 */
export const useSimulateLaunchpadSetExistingTokenAfterIcoEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setExistingTokenAfterICO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setExistingTokenAfterTransfer"`
 */
export const useSimulateLaunchpadSetExistingTokenAfterTransferEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setExistingTokenAfterTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"setLaunchpadImplementation"`
 */
export const useSimulateLaunchpadSetLaunchpadImplementationEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'setLaunchpadImplementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"transferLaunchpadDiamondOwnership"`
 */
export const useSimulateLaunchpadTransferLaunchpadDiamondOwnershipEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'transferLaunchpadDiamondOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchPadMaxDurationIncrement"`
 */
export const useSimulateLaunchpadUpdateLaunchPadMaxDurationIncrementEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchPadMaxDurationIncrement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchPadOwner"`
 */
export const useSimulateLaunchpadUpdateLaunchPadOwnerEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchPadOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateLaunchpadImplementation"`
 */
export const useSimulateLaunchpadUpdateLaunchpadImplementationEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateLaunchpadImplementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateMaxTokenCreationDeadline"`
 */
export const useSimulateLaunchpadUpdateMaxTokenCreationDeadlineEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateMaxTokenCreationDeadline',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"updateSignerAddress"`
 */
export const useSimulateLaunchpadUpdateSignerAddressEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'updateSignerAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadAbi}__ and `functionName` set to `"upgradeLaunchPadProjectFacets"`
 */
export const useSimulateLaunchpadUpgradeLaunchPadProjectFacetsEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadAbi,
    address: launchpadAddress,
    functionName: 'upgradeLaunchPadProjectFacets',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link launchpadAbi}__
 */
export const useWatchLaunchpadEvm = /*#__PURE__*/ createUseWatchContractEvent({
  abi: launchpadAbi,
  address: launchpadAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link launchpadAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchLaunchpadRoleAdminChangedEvm =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: launchpadAbi,
    address: launchpadAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link launchpadAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchLaunchpadRoleGrantedEvm =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: launchpadAbi,
    address: launchpadAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link launchpadAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchLaunchpadRoleRevokedEvm =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: launchpadAbi,
    address: launchpadAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__
 */
export const useReadLaunchpadProjectEvm = /*#__PURE__*/ createUseReadContract({
  abi: launchpadProjectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"checkSignature"`
 */
export const useReadLaunchpadProjectCheckSignatureEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'checkSignature',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"checkSignatureForCrossPayment"`
 */
export const useReadLaunchpadProjectCheckSignatureForCrossPaymentEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'checkSignatureForCrossPayment',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"checkSignatureForRefund"`
 */
export const useReadLaunchpadProjectCheckSignatureForRefundEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'checkSignatureForRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getAllInvestors"`
 */
export const useReadLaunchpadProjectGetAllInvestorsEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getAllInvestors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getCurrentTier"`
 */
export const useReadLaunchpadProjectGetCurrentTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getCurrentTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getFeeShare"`
 */
export const useReadLaunchpadProjectGetFeeShareEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getFeeShare',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getHardCapPerTier"`
 */
export const useReadLaunchpadProjectGetHardCapPerTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getHardCapPerTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getInvestorAddressByIndex"`
 */
export const useReadLaunchpadProjectGetInvestorAddressByIndexEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getInvestorAddressByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getInvestorsLength"`
 */
export const useReadLaunchpadProjectGetInvestorsLengthEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getInvestorsLength',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getInvestorsRefundedCount"`
 */
export const useReadLaunchpadProjectGetInvestorsRefundedCountEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getInvestorsRefundedCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getLaunchPadAddress"`
 */
export const useReadLaunchpadProjectGetLaunchPadAddressEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getLaunchPadAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getLaunchPadInfo"`
 */
export const useReadLaunchpadProjectGetLaunchPadInfoEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getLaunchPadInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getMaxInvestPerWalletPerTier"`
 */
export const useReadLaunchpadProjectGetMaxInvestPerWalletPerTierEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getMaxInvestPerWalletPerTier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getMaxInvestorsToRefund"`
 */
export const useReadLaunchpadProjectGetMaxInvestorsToRefundEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getMaxInvestorsToRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getNextNonce"`
 */
export const useReadLaunchpadProjectGetNextNonceEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getNextNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getProjectOwnerRole"`
 */
export const useReadLaunchpadProjectGetProjectOwnerRoleEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getProjectOwnerRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getPurchasedInfoByUser"`
 */
export const useReadLaunchpadProjectGetPurchasedInfoByUserEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getPurchasedInfoByUser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getReleaseSchedule"`
 */
export const useReadLaunchpadProjectGetReleaseScheduleEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getReleaseSchedule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getReleasedTokensPercentage"`
 */
export const useReadLaunchpadProjectGetReleasedTokensPercentageEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getReleasedTokensPercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getRemainingInvestorsToRefund"`
 */
export const useReadLaunchpadProjectGetRemainingInvestorsToRefundEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getRemainingInvestorsToRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getTokenCreationDeadline"`
 */
export const useReadLaunchpadProjectGetTokenCreationDeadlineEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getTokenCreationDeadline',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getTokensAvailableToBeClaimed"`
 */
export const useReadLaunchpadProjectGetTokensAvailableToBeClaimedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getTokensAvailableToBeClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"getTotalRaised"`
 */
export const useReadLaunchpadProjectGetTotalRaisedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'getTotalRaised',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"isSuperchargerEnabled"`
 */
export const useReadLaunchpadProjectIsSuperchargerEnabledEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'isSuperchargerEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"recoverSigner"`
 */
export const useReadLaunchpadProjectRecoverSignerEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'recoverSigner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"tokenDecimals"`
 */
export const useReadLaunchpadProjectTokenDecimalsEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'tokenDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"totalTokensClaimed"`
 */
export const useReadLaunchpadProjectTotalTokensClaimedEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'totalTokensClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"totalTokensSold"`
 */
export const useReadLaunchpadProjectTotalTokensSoldEvm =
  /*#__PURE__*/ createUseReadContract({
    abi: launchpadProjectAbi,
    functionName: 'totalTokensSold',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__
 */
export const useWriteLaunchpadProjectEvm = /*#__PURE__*/ createUseWriteContract(
  { abi: launchpadProjectAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"buyTokens"`
 */
export const useWriteLaunchpadProjectBuyTokensEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'buyTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"buyTokensWithSupercharger"`
 */
export const useWriteLaunchpadProjectBuyTokensWithSuperchargerEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'buyTokensWithSupercharger',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"claimTokens"`
 */
export const useWriteLaunchpadProjectClaimTokensEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'claimTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"claimTokensWithSupercharger"`
 */
export const useWriteLaunchpadProjectClaimTokensWithSuperchargerEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'claimTokensWithSupercharger',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefund"`
 */
export const useWriteLaunchpadProjectProcessRefundEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefund',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefundOnSoftCapFailure"`
 */
export const useWriteLaunchpadProjectProcessRefundOnSoftCapFailureEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefundOnSoftCapFailure',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefundOnTokenCreationExpired"`
 */
export const useWriteLaunchpadProjectProcessRefundOnTokenCreationExpiredEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefundOnTokenCreationExpired',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refund"`
 */
export const useWriteLaunchpadProjectRefundEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundAllInvestors"`
 */
export const useWriteLaunchpadProjectRefundAllInvestorsEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'refundAllInvestors',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnSoftCapFailure"`
 */
export const useWriteLaunchpadProjectRefundOnSoftCapFailureEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnSoftCapFailure',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnTokenCreationExpired"`
 */
export const useWriteLaunchpadProjectRefundOnTokenCreationExpiredEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnTokenCreationExpired',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnUnstakedDuringSales"`
 */
export const useWriteLaunchpadProjectRefundOnUnstakedDuringSalesEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnUnstakedDuringSales',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"reserveTokens"`
 */
export const useWriteLaunchpadProjectReserveTokensEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'reserveTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"setMaxInvestorsToRefund"`
 */
export const useWriteLaunchpadProjectSetMaxInvestorsToRefundEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: launchpadProjectAbi,
    functionName: 'setMaxInvestorsToRefund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__
 */
export const useSimulateLaunchpadProjectEvm =
  /*#__PURE__*/ createUseSimulateContract({ abi: launchpadProjectAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"buyTokens"`
 */
export const useSimulateLaunchpadProjectBuyTokensEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'buyTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"buyTokensWithSupercharger"`
 */
export const useSimulateLaunchpadProjectBuyTokensWithSuperchargerEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'buyTokensWithSupercharger',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"claimTokens"`
 */
export const useSimulateLaunchpadProjectClaimTokensEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'claimTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"claimTokensWithSupercharger"`
 */
export const useSimulateLaunchpadProjectClaimTokensWithSuperchargerEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'claimTokensWithSupercharger',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefund"`
 */
export const useSimulateLaunchpadProjectProcessRefundEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefundOnSoftCapFailure"`
 */
export const useSimulateLaunchpadProjectProcessRefundOnSoftCapFailureEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefundOnSoftCapFailure',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"processRefundOnTokenCreationExpired"`
 */
export const useSimulateLaunchpadProjectProcessRefundOnTokenCreationExpiredEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'processRefundOnTokenCreationExpired',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refund"`
 */
export const useSimulateLaunchpadProjectRefundEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'refund',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundAllInvestors"`
 */
export const useSimulateLaunchpadProjectRefundAllInvestorsEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'refundAllInvestors',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnSoftCapFailure"`
 */
export const useSimulateLaunchpadProjectRefundOnSoftCapFailureEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnSoftCapFailure',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnTokenCreationExpired"`
 */
export const useSimulateLaunchpadProjectRefundOnTokenCreationExpiredEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnTokenCreationExpired',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"refundOnUnstakedDuringSales"`
 */
export const useSimulateLaunchpadProjectRefundOnUnstakedDuringSalesEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'refundOnUnstakedDuringSales',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"reserveTokens"`
 */
export const useSimulateLaunchpadProjectReserveTokensEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'reserveTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link launchpadProjectAbi}__ and `functionName` set to `"setMaxInvestorsToRefund"`
 */
export const useSimulateLaunchpadProjectSetMaxInvestorsToRefundEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: launchpadProjectAbi,
    functionName: 'setMaxInvestorsToRefund',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20Evm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20AllowanceEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOfEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20DecimalsEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20NameEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20SymbolEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupplyEvm = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20Evm = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20ApproveEvm = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20TransferEvm = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFromEvm =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20Evm = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20ApproveEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20TransferEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFromEvm =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Evm = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvm =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvm =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
