export const endpoint = "https://graphql.factorychain.io/subgraphs/name/swap/exchange"
export const query = {
  "operationName": "transactions",
  "query": "query transactions {\n  transactions(first: 50, orderBy: timestamp, orderDirection: desc) {\n    mints(orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n        __typename\n      }\n      pair {\n        token0 {\n          id\n          symbol\n          __typename\n        }\n        token1 {\n          id\n          symbol\n          __typename\n        }\n        __typename\n      }\n      to\n      liquidity\n      amount0\n      amount1\n      amountUSD\n      __typename\n    }\n    burns(orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n        __typename\n      }\n      pair {\n        token0 {\n          id\n          symbol\n          __typename\n        }\n        token1 {\n          id\n          symbol\n          __typename\n        }\n        __typename\n      }\n      sender\n      liquidity\n      amount0\n      amount1\n      amountUSD\n      __typename\n    }\n    swaps(orderBy: timestamp, orderDirection: desc) {\n      transaction {\n        id\n        timestamp\n        __typename\n      }\n      pair {\n        token0 {\n          id\n          symbol\n          __typename\n        }\n        token1 {\n          id\n          symbol\n          __typename\n        }\n        __typename\n      }\n      amount0In\n      amount0Out\n      amount1In\n      amount1Out\n      amountUSD\n      to\n      __typename\n    }\n    __typename\n  }\n}\n",
  "variables": {}
}