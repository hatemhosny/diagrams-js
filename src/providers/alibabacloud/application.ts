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

function _Application(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "application";
  return node;
}

export function ApiGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "ApiGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApiGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gatewayIcon;
  return node;
}

export function BeeBot(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "BeeBot", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BeeBot";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bee_botIcon;
  return node;
}

export function BlockchainAsAService(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "BlockchainAsAService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BlockchainAsAService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchain_as_a_serviceIcon;
  return node;
}

export function CloudCallCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "CloudCallCenter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudCallCenter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_call_centerIcon;
  return node;
}

export function CodePipeline(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "CodePipeline", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CodePipeline";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = code_pipelineIcon;
  return node;
}

export function DirectMail(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "DirectMail", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DirectMail";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = direct_mailIcon;
  return node;
}

export function LogService(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "LogService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = log_serviceIcon;
  return node;
}

export function MessageNotificationService(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "MessageNotificationService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MessageNotificationService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = message_notification_serviceIcon;
  return node;
}

export function NodeJsPerformancePlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "NodeJsPerformancePlatform", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NodeJsPerformancePlatform";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = node_js_performance_platformIcon;
  return node;
}

export function OpenSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "OpenSearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OpenSearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = open_searchIcon;
  return node;
}

export function PerformanceTestingService(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "PerformanceTestingService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PerformanceTestingService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = performance_testing_serviceIcon;
  return node;
}

export function RdCloud(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "RdCloud", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RdCloud";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rd_cloudIcon;
  return node;
}

export function SmartConversationAnalysis(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "SmartConversationAnalysis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SmartConversationAnalysis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = smart_conversation_analysisIcon;
  return node;
}

export function Yida(label?: string, options?: Record<string, unknown>) {
  const node = _Application(label ?? "Yida", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Yida";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = yidaIcon;
  return node;
}

// Aliases
export const SLS = LogService;
export const MNS = MessageNotificationService;
export const PTS = PerformanceTestingService;
export const SCA = SmartConversationAnalysis;
