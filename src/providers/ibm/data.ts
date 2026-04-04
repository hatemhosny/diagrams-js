import { _Ibm } from "./index.js";
import cachesIcon from "../../../resources/ibm/data/caches.png";
import cloudIcon from "../../../resources/ibm/data/cloud.png";
import conversation_trained_deployedIcon from "../../../resources/ibm/data/conversation-trained-deployed.png";
import data_servicesIcon from "../../../resources/ibm/data/data-services.png";
import data_sourcesIcon from "../../../resources/ibm/data/data-sources.png";
import device_identity_serviceIcon from "../../../resources/ibm/data/device-identity-service.png";
import device_registryIcon from "../../../resources/ibm/data/device-registry.png";
import enterprise_dataIcon from "../../../resources/ibm/data/enterprise-data.png";
import enterprise_user_directoryIcon from "../../../resources/ibm/data/enterprise-user-directory.png";
import file_repositoryIcon from "../../../resources/ibm/data/file-repository.png";
import ground_truthIcon from "../../../resources/ibm/data/ground-truth.png";
import modelIcon from "../../../resources/ibm/data/model.png";
import tms_data_interfaceIcon from "../../../resources/ibm/data/tms-data-interface.png";

class _Data extends _Ibm {
  protected static override _type = "data";
}

export class Caches extends _Data {
  protected static _iconDataUrl = cachesIcon;
}

export class Cloud extends _Data {
  protected static _iconDataUrl = cloudIcon;
}

export class ConversationTrainedDeployed extends _Data {
  protected static _iconDataUrl = conversation_trained_deployedIcon;
}

export class DataServices extends _Data {
  protected static _iconDataUrl = data_servicesIcon;
}

export class DataSources extends _Data {
  protected static _iconDataUrl = data_sourcesIcon;
}

export class DeviceIdentityService extends _Data {
  protected static _iconDataUrl = device_identity_serviceIcon;
}

export class DeviceRegistry extends _Data {
  protected static _iconDataUrl = device_registryIcon;
}

export class EnterpriseData extends _Data {
  protected static _iconDataUrl = enterprise_dataIcon;
}

export class EnterpriseUserDirectory extends _Data {
  protected static _iconDataUrl = enterprise_user_directoryIcon;
}

export class FileRepository extends _Data {
  protected static _iconDataUrl = file_repositoryIcon;
}

export class GroundTruth extends _Data {
  protected static _iconDataUrl = ground_truthIcon;
}

export class Model extends _Data {
  protected static _iconDataUrl = modelIcon;
}

export class TmsDataInterface extends _Data {
  protected static _iconDataUrl = tms_data_interfaceIcon;
}
