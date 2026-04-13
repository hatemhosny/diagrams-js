import { _Ibm } from "./index.js";
import blockchain_developerIcon from "../../../resources/ibm/blockchain/blockchain-developer.png";
import blockchainIcon from "../../../resources/ibm/blockchain/blockchain.png";
import certificate_authorityIcon from "../../../resources/ibm/blockchain/certificate-authority.png";
import client_applicationIcon from "../../../resources/ibm/blockchain/client-application.png";
import communicationIcon from "../../../resources/ibm/blockchain/communication.png";
import consensusIcon from "../../../resources/ibm/blockchain/consensus.png";
import event_listenerIcon from "../../../resources/ibm/blockchain/event-listener.png";
import eventIcon from "../../../resources/ibm/blockchain/event.png";
import existing_enterprise_systemsIcon from "../../../resources/ibm/blockchain/existing-enterprise-systems.png";
import hyperledger_fabricIcon from "../../../resources/ibm/blockchain/hyperledger-fabric.png";
import key_managementIcon from "../../../resources/ibm/blockchain/key-management.png";
import ledgerIcon from "../../../resources/ibm/blockchain/ledger.png";
import membership_services_provider_apiIcon from "../../../resources/ibm/blockchain/membership-services-provider-api.png";
import membershipIcon from "../../../resources/ibm/blockchain/membership.png";
import message_busIcon from "../../../resources/ibm/blockchain/message-bus.png";
import nodeIcon from "../../../resources/ibm/blockchain/node.png";
import servicesIcon from "../../../resources/ibm/blockchain/services.png";
import smart_contractIcon from "../../../resources/ibm/blockchain/smart-contract.png";
import transaction_managerIcon from "../../../resources/ibm/blockchain/transaction-manager.png";
import walletIcon from "../../../resources/ibm/blockchain/wallet.png";

function _Blockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "blockchain";
  return node;
}

export function BlockchainDeveloper(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "BlockchainDeveloper", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BlockchainDeveloper";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchain_developerIcon;
  return node;
}

export function Blockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Blockchain", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Blockchain";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchainIcon;
  return node;
}

export function CertificateAuthority(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "CertificateAuthority", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CertificateAuthority";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificate_authorityIcon;
  return node;
}

export function ClientApplication(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "ClientApplication", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ClientApplication";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = client_applicationIcon;
  return node;
}

export function Communication(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Communication", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Communication";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = communicationIcon;
  return node;
}

export function Consensus(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Consensus", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Consensus";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = consensusIcon;
  return node;
}

export function EventListener(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "EventListener", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventListener";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_listenerIcon;
  return node;
}

export function Event(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Event", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Event";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventIcon;
  return node;
}

export function ExistingEnterpriseSystems(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "ExistingEnterpriseSystems", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ExistingEnterpriseSystems";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = existing_enterprise_systemsIcon;
  return node;
}

export function HyperledgerFabric(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "HyperledgerFabric", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "HyperledgerFabric";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hyperledger_fabricIcon;
  return node;
}

export function KeyManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "KeyManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "KeyManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = key_managementIcon;
  return node;
}

export function Ledger(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Ledger", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Ledger";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ledgerIcon;
  return node;
}

export function MembershipServicesProviderApi(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "MembershipServicesProviderApi", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MembershipServicesProviderApi";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    membership_services_provider_apiIcon;
  return node;
}

export function Membership(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Membership", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Membership";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = membershipIcon;
  return node;
}

export function MessageBus(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "MessageBus", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MessageBus";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = message_busIcon;
  return node;
}

export function Node(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Node", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Node";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nodeIcon;
  return node;
}

export function Services(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Services", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Services";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = servicesIcon;
  return node;
}

export function SmartContract(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "SmartContract", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SmartContract";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = smart_contractIcon;
  return node;
}

export function TransactionManager(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "TransactionManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TransactionManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transaction_managerIcon;
  return node;
}

export function Wallet(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Wallet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Wallet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = walletIcon;
  return node;
}
