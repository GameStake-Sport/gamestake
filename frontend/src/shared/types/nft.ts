interface NFTAttribute {
  'trait_type': string
  'value': number | string
}

export interface NFT {
  'name': string,
  'description': string,
  'image': string,
  'attributes': NFTAttribute[]
}