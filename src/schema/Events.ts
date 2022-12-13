export interface OCDetails {
  ID: string;
  O: string;
  N: string;
  MBS: string;
  G: string;
  P: string;
  BWPC: string;
  OD: number;
  IMF: boolean;
  E: unknown[];
}

export interface OCGDetais {
  ID: string;
  N: string;
  ESD: string;
  ED: string;
  D: string;
  T: string;
  MBS: string;
  SO: number;
  OC: {
    [key: number]: OCDetails;
  };
}

export interface OCG {
  [key: number]: OCGDetais;
}

export interface EventItemDetails {
  C: string;
  N: string;
  TYPE: string;
  IET: string;
  NET: string;
  NID: string;
  ESD: string;
  ED: string;
  D: string;
  T: string;
  DAY: string;
  S: string;
  P: string;
  LC: string;
  LN: string;
  LO: string;
  FC: string;
  BD: string;
  IMF: boolean;
  SEID: string;
  CC: string;
  BCCN: string;
  BCWC: string;
  BCMC: string;
  BWPC: string;
  HCSO: boolean;
  RE?: unknown;
  OCG: OCG;
  EC: unknown;
  HEC: boolean;
  BS: number;
}
