import { _Aws } from "./index.js";
import blockchain_resourceIcon from "../../../resources/aws/blockchain/blockchain-resource.png";
import blockchainIcon from "../../../resources/aws/blockchain/blockchain.png";
import managed_blockchainIcon from "../../../resources/aws/blockchain/managed-blockchain.png";
import quantum_ledger_database_qldbIcon from "../../../resources/aws/blockchain/quantum-ledger-database-qldb.png";

class _Blockchain extends _Aws {
  protected static override _type = "blockchain";
}

export class BlockchainResource extends _Blockchain {
  protected static _iconDataUrl = blockchain_resourceIcon;
}

export class Blockchain extends _Blockchain {
  protected static _iconDataUrl = blockchainIcon;
}

export class ManagedBlockchain extends _Blockchain {
  protected static _iconDataUrl = managed_blockchainIcon;
}

export class QuantumLedgerDatabaseQldb extends _Blockchain {
  protected static _iconDataUrl = quantum_ledger_database_qldbIcon;
}

// Aliases
export const QLDB = QuantumLedgerDatabaseQldb;
