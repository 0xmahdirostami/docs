module.exports = {
  docs: [
    'introduction',
    'lido-dao',
    'guides/steth-integration-guide',
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Node Operators',
          items: [
            'guides/node-operators/general-overview',
            'guides/node-operators/validator-keys',
            'guides/node-operators/el-rewards-configuration',
            {
              type: 'category',
              label: 'Validator Exits Automation',
              items: [
                'guides/node-operators/exits/introduction',
                'guides/node-operators/exits/general-information',
                'guides/node-operators/exits/exit-message-generation-signing',
                'guides/node-operators/exits/flow-examples',
                'guides/node-operators/exits/tooling-setup',
              ],
            },
          ],
        },
        'guides/oracle-operator-manual',
        'guides/deposit-security-manual',
        {
          type: 'category',
          label: 'Tooling',
          items: [
            'guides/tooling',
            'guides/validator-ejector-guide',
            'guides/kapi-guide',
          ],
        },
        'guides/multisig-deployment',
        'guides/protocol-levers',
        'guides/etherscan-voting',
        'guides/easy-track-guide',
        'guides/address-ownership-guide',
        'guides/multisig-signer-manual',
        'guides/checking-aragon-vote',
        'guides/checking-gnosis-safe',
        'guides/1inch-pool-rewards',
        'guides/early-staker-airdrop',
        'guides/jumpgates',
        'guides/verify-lido-v2-upgrade-manual'
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
          'integrations/api',
          'integrations/wallets',
          'integrations/sdk',
          'integrations/subgraph',
        {
          type: 'category',
          label: 'AAVE',
          items: ['integrations/aave/specification', 'integrations/aave/aip'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Token guides',
      items: [
        'token-guides/steth-superuser-functions',
        'token-guides/steth-on-aave-caveats',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/lido',
        'contracts/lido-oracle',
        'contracts/node-operators-registry',
        'contracts/withdrawals-manager-stub',
        'contracts/wsteth',
        'contracts/deposit-security-module',
        'contracts/self-owned-steth-burner',
        'contracts/composite-post-rebase-beacon-receiver',
        'contracts/lido-execution-layer-rewards-vault',
        'contracts/mev-boost-relays-allowed-list',
        'contracts/trp-vesting-escrow',
        'contracts/gate-seal',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/bugbounty'],
    },
    {
      type: 'category',
      label: 'Deployed contracts',
      link: { type: 'doc', id: 'deployed-contracts/index' },
      items: [
        { type: 'doc', id: 'deployed-contracts/index', label: 'Mainnet' },
        'deployed-contracts/goerli',
        'deployed-contracts/rinkeby',
        'deployed-contracts/ropsten',
        'deployed-contracts/kovan',
      ],
    },
  ],
}
