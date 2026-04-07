import { _Aws } from "./index.js";
import blockchain_resourceIcon from "../../../resources/aws/blockchain/blockchain-resource.png";
import blockchainIcon from "../../../resources/aws/blockchain/blockchain.png";
import managed_blockchainIcon from "../../../resources/aws/blockchain/managed-blockchain.png";
import quantum_ledger_database_qldbIcon from "../../../resources/aws/blockchain/quantum-ledger-database-qldb.png";

function _Blockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "blockchain";
  return node;
}

export function BlockchainResource(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "BlockchainResource", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchain_resourceIcon;
  return node;
}

export function Blockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Blockchain", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchainIcon;
  return node;
}

export function ManagedBlockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "ManagedBlockchain", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_blockchainIcon;
  return node;
}

export function QuantumLedgerDatabaseQldb(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "QuantumLedgerDatabaseQldb", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quantum_ledger_database_qldbIcon;
  return node;
}

// Aliases
export const QLDB = QuantumLedgerDatabaseQldb;
