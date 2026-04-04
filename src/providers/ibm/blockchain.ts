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

class _Blockchain extends _Ibm {
  protected static override _type = "blockchain";
}

export class BlockchainDeveloper extends _Blockchain {
  protected static _iconDataUrl = blockchain_developerIcon;
}

export class Blockchain extends _Blockchain {
  protected static _iconDataUrl = blockchainIcon;
}

export class CertificateAuthority extends _Blockchain {
  protected static _iconDataUrl = certificate_authorityIcon;
}

export class ClientApplication extends _Blockchain {
  protected static _iconDataUrl = client_applicationIcon;
}

export class Communication extends _Blockchain {
  protected static _iconDataUrl = communicationIcon;
}

export class Consensus extends _Blockchain {
  protected static _iconDataUrl = consensusIcon;
}

export class EventListener extends _Blockchain {
  protected static _iconDataUrl = event_listenerIcon;
}

export class Event extends _Blockchain {
  protected static _iconDataUrl = eventIcon;
}

export class ExistingEnterpriseSystems extends _Blockchain {
  protected static _iconDataUrl = existing_enterprise_systemsIcon;
}

export class HyperledgerFabric extends _Blockchain {
  protected static _iconDataUrl = hyperledger_fabricIcon;
}

export class KeyManagement extends _Blockchain {
  protected static _iconDataUrl = key_managementIcon;
}

export class Ledger extends _Blockchain {
  protected static _iconDataUrl = ledgerIcon;
}

export class MembershipServicesProviderApi extends _Blockchain {
  protected static _iconDataUrl = membership_services_provider_apiIcon;
}

export class Membership extends _Blockchain {
  protected static _iconDataUrl = membershipIcon;
}

export class MessageBus extends _Blockchain {
  protected static _iconDataUrl = message_busIcon;
}

export class Node extends _Blockchain {
  protected static _iconDataUrl = nodeIcon;
}

export class Services extends _Blockchain {
  protected static _iconDataUrl = servicesIcon;
}

export class SmartContract extends _Blockchain {
  protected static _iconDataUrl = smart_contractIcon;
}

export class TransactionManager extends _Blockchain {
  protected static _iconDataUrl = transaction_managerIcon;
}

export class Wallet extends _Blockchain {
  protected static _iconDataUrl = walletIcon;
}
