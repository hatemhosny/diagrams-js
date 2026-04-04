import { _Azure } from "./index.js";
import abs_memberIcon from "../../../resources/azure/blockchain/abs-member.png";
import azure_blockchain_serviceIcon from "../../../resources/azure/blockchain/azure-blockchain-service.png";
import azure_token_serviceIcon from "../../../resources/azure/blockchain/azure-token-service.png";
import blockchain_applicationsIcon from "../../../resources/azure/blockchain/blockchain-applications.png";
import consortiumIcon from "../../../resources/azure/blockchain/consortium.png";
import outbound_connectionIcon from "../../../resources/azure/blockchain/outbound-connection.png";

class _Blockchain extends _Azure {
  protected static override _type = "blockchain";
}

export class AbsMember extends _Blockchain {
  protected static _iconDataUrl = abs_memberIcon;
}

export class AzureBlockchainService extends _Blockchain {
  protected static _iconDataUrl = azure_blockchain_serviceIcon;
}

export class AzureTokenService extends _Blockchain {
  protected static _iconDataUrl = azure_token_serviceIcon;
}

export class BlockchainApplications extends _Blockchain {
  protected static _iconDataUrl = blockchain_applicationsIcon;
}

export class Consortium extends _Blockchain {
  protected static _iconDataUrl = consortiumIcon;
}

export class OutboundConnection extends _Blockchain {
  protected static _iconDataUrl = outbound_connectionIcon;
}
