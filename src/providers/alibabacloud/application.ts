import { _Alibabacloud } from "./index.js";
import api_gatewayIcon from "../../../resources/alibabacloud/application/api-gateway.png";
import bee_botIcon from "../../../resources/alibabacloud/application/bee-bot.png";
import blockchain_as_a_serviceIcon from "../../../resources/alibabacloud/application/blockchain-as-a-service.png";
import cloud_call_centerIcon from "../../../resources/alibabacloud/application/cloud-call-center.png";
import code_pipelineIcon from "../../../resources/alibabacloud/application/code-pipeline.png";
import direct_mailIcon from "../../../resources/alibabacloud/application/direct-mail.png";
import log_serviceIcon from "../../../resources/alibabacloud/application/log-service.png";
import message_notification_serviceIcon from "../../../resources/alibabacloud/application/message-notification-service.png";
import node_js_performance_platformIcon from "../../../resources/alibabacloud/application/node-js-performance-platform.png";
import open_searchIcon from "../../../resources/alibabacloud/application/open-search.png";
import performance_testing_serviceIcon from "../../../resources/alibabacloud/application/performance-testing-service.png";
import rd_cloudIcon from "../../../resources/alibabacloud/application/rd-cloud.png";
import smart_conversation_analysisIcon from "../../../resources/alibabacloud/application/smart-conversation-analysis.png";
import yidaIcon from "../../../resources/alibabacloud/application/yida.png";

class _Application extends _Alibabacloud {
  protected static override _type = "application";
}

export class ApiGateway extends _Application {
  protected static override _iconDataUrl = api_gatewayIcon;
}

export class BeeBot extends _Application {
  protected static override _iconDataUrl = bee_botIcon;
}

export class BlockchainAsAService extends _Application {
  protected static override _iconDataUrl = blockchain_as_a_serviceIcon;
}

export class CloudCallCenter extends _Application {
  protected static override _iconDataUrl = cloud_call_centerIcon;
}

export class CodePipeline extends _Application {
  protected static override _iconDataUrl = code_pipelineIcon;
}

export class DirectMail extends _Application {
  protected static override _iconDataUrl = direct_mailIcon;
}

export class LogService extends _Application {
  protected static override _iconDataUrl = log_serviceIcon;
}

export class MessageNotificationService extends _Application {
  protected static override _iconDataUrl = message_notification_serviceIcon;
}

export class NodeJsPerformancePlatform extends _Application {
  protected static override _iconDataUrl = node_js_performance_platformIcon;
}

export class OpenSearch extends _Application {
  protected static override _iconDataUrl = open_searchIcon;
}

export class PerformanceTestingService extends _Application {
  protected static override _iconDataUrl = performance_testing_serviceIcon;
}

export class RdCloud extends _Application {
  protected static override _iconDataUrl = rd_cloudIcon;
}

export class SmartConversationAnalysis extends _Application {
  protected static override _iconDataUrl = smart_conversation_analysisIcon;
}

export class Yida extends _Application {
  protected static override _iconDataUrl = yidaIcon;
}

// Aliases
export const SLS = LogService;
export const MNS = MessageNotificationService;
export const PTS = PerformanceTestingService;
export const SCA = SmartConversationAnalysis;
