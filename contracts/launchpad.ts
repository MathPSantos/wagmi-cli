export const launchpadAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "LAUNCHPAD_PRODUCT_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "investor",
        type: "address",
      },
    ],
    name: "addInvestorToLaunchPad",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ILaunchPadCommon.LaunchPadType",
            name: "launchPadType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "paymentTokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "softCap",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "hardCap",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.FundTarget",
                name: "fundTarget",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "maxInvestPerWallet",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenCreationDeadline",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "penaltyFeePercent",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expireDuration",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.RefundInfo",
                name: "refundInfo",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "enabled",
                    type: "bool",
                  },
                  {
                    internalType: "address",
                    name: "dexRouter",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "pairToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amountToList",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.IdoInfo",
                name: "idoInfo",
                type: "tuple",
              },
            ],
            internalType: "struct ILaunchPadCommon.LaunchPadInfo",
            name: "launchPadInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "percent",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isVesting",
                type: "bool",
              },
            ],
            internalType: "struct ILaunchPadCommon.ReleaseScheduleV2[]",
            name: "releaseSchedule",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "logo",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "treasuryReserved",
                type: "uint256",
              },
            ],
            internalType: "struct ILaunchPadCommon.CreateErc20Input",
            name: "createErc20Input",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isSuperchargerEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "feePercentage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "paymentTokenAddress",
            type: "address",
          },
        ],
        internalType: "struct ILaunchPadCommon.CreateLaunchPadInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "createLaunchPad",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ILaunchPadCommon.LaunchPadType",
            name: "launchPadType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "paymentTokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "softCap",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "hardCap",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.FundTarget",
                name: "fundTarget",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "maxInvestPerWallet",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenCreationDeadline",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "penaltyFeePercent",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expireDuration",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.RefundInfo",
                name: "refundInfo",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "enabled",
                    type: "bool",
                  },
                  {
                    internalType: "address",
                    name: "dexRouter",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "pairToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amountToList",
                    type: "uint256",
                  },
                ],
                internalType: "struct ILaunchPadCommon.IdoInfo",
                name: "idoInfo",
                type: "tuple",
              },
            ],
            internalType: "struct ILaunchPadCommon.LaunchPadInfo",
            name: "launchPadInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "percent",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isVesting",
                type: "bool",
              },
            ],
            internalType: "struct ILaunchPadCommon.ReleaseScheduleV2[]",
            name: "releaseSchedule",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "logo",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "treasuryReserved",
                type: "uint256",
              },
            ],
            internalType: "struct ILaunchPadCommon.CreateErc20Input",
            name: "createErc20Input",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isSuperchargerEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "feePercentage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "paymentTokenAddress",
            type: "address",
          },
        ],
        internalType: "struct ILaunchPadCommon.CreateLaunchPadInput",
        name: "storeInput",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sourceChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentIndex",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct ICrossPaymentModule.CrossPaymentSignatureInput",
        name: "crossPaymentSignatureInput",
        type: "tuple",
      },
    ],
    name: "createLaunchPadWithPaymentSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPadAddress",
        type: "address",
      },
    ],
    name: "createLaunchpadV2LiquidityPool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPadAddress",
        type: "address",
      },
    ],
    name: "createTokenAfterICO",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getLaunchPadCountByOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLaunchPadMaxDurationIncrement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPadAddress",
        type: "address",
      },
    ],
    name: "getLaunchPadTokenInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "logo",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "treasuryReserved",
            type: "uint256",
          },
        ],
        internalType: "struct ILaunchPadCommon.CreateErc20Input",
        name: "createErc20Input",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLaunchPadsByInvestorCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "investor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
    ],
    name: "getLaunchPadsByInvestorPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
    ],
    name: "getLaunchPadsByOwnerPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLaunchPadsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
    ],
    name: "getLaunchPadsPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxTokenCreationDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSignerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tier",
        type: "uint256",
      },
    ],
    name: "getSuperChargerHeadstartByTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSuperChargerHeadstarts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tier",
        type: "uint256",
      },
    ],
    name: "getSuperChargerMultiplierByTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tier",
        type: "uint256",
      },
    ],
    name: "getSuperChargerTokensPercByTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchpad",
        type: "address",
      },
    ],
    name: "removeLaunchpad",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPad",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setExistingTokenAfterICO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPad",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "setExistingTokenAfterTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPad",
        type: "address",
      },
    ],
    name: "setLaunchpadImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPad",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferLaunchpadDiamondOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxDurationIncrement",
        type: "uint256",
      },
    ],
    name: "updateLaunchPadMaxDurationIncrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "updateLaunchPadOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newLaunchpadImplementation",
        type: "address",
      },
    ],
    name: "updateLaunchpadImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxTokenCreationDeadline",
        type: "uint256",
      },
    ],
    name: "updateMaxTokenCreationDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSignerAddress",
        type: "address",
      },
    ],
    name: "updateSignerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "launchPad",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "upgradeLaunchPadProjectFacets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
