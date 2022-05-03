import sample from 'lodash/sample'

// // Array of available nodes to connect to
export const nodes = [process.env.NEXT_PUBLIC_PROPER_RPC_NODE]
const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
