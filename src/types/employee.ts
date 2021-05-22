export interface Employee {
  name: string
  email: string
  phoneNumber: null | string
  office: string | null
  manager: null | string
  orgUnit: string
  mainText: null | string
  gitHub: null | string
  twitter: null | string
  stackOverflow: null | string
  linkedIn: null | string
  imagePortraitUrl: null | string
  imageWallOfLeetUrl: null | string
  highlighted: boolean
  published: boolean
}
