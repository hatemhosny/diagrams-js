import { _Alibabacloud } from "./index.js";
import auto_scalingIcon from "../../../resources/alibabacloud/compute/auto-scaling.png";
import batch_computeIcon from "../../../resources/alibabacloud/compute/batch-compute.png";
import container_registryIcon from "../../../resources/alibabacloud/compute/container-registry.png";
import container_serviceIcon from "../../../resources/alibabacloud/compute/container-service.png";
import elastic_compute_serviceIcon from "../../../resources/alibabacloud/compute/elastic-compute-service.png";
import elastic_container_instanceIcon from "../../../resources/alibabacloud/compute/elastic-container-instance.png";
import elastic_high_performance_computingIcon from "../../../resources/alibabacloud/compute/elastic-high-performance-computing.png";
import elastic_searchIcon from "../../../resources/alibabacloud/compute/elastic-search.png";
import function_computeIcon from "../../../resources/alibabacloud/compute/function-compute.png";
import operation_orchestration_serviceIcon from "../../../resources/alibabacloud/compute/operation-orchestration-service.png";
import resource_orchestration_serviceIcon from "../../../resources/alibabacloud/compute/resource-orchestration-service.png";
import server_load_balancerIcon from "../../../resources/alibabacloud/compute/server-load-balancer.png";
import serverless_app_engineIcon from "../../../resources/alibabacloud/compute/serverless-app-engine.png";
import simple_application_serverIcon from "../../../resources/alibabacloud/compute/simple-application-server.png";
import web_app_serviceIcon from "../../../resources/alibabacloud/compute/web-app-service.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function AutoScaling(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AutoScaling", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auto_scalingIcon;
  return node;
}

export function BatchCompute(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BatchCompute", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = batch_computeIcon;
  return node;
}

export function ContainerRegistry(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerRegistry", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_registryIcon;
  return node;
}

export function ContainerService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_serviceIcon;
  return node;
}

export function ElasticComputeService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticComputeService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_compute_serviceIcon;
  return node;
}

export function ElasticContainerInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticContainerInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_container_instanceIcon;
  return node;
}

export function ElasticHighPerformanceComputing(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticHighPerformanceComputing", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_high_performance_computingIcon;
  return node;
}

export function ElasticSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_searchIcon;
  return node;
}

export function FunctionCompute(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "FunctionCompute", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = function_computeIcon;
  return node;
}

export function OperationOrchestrationService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OperationOrchestrationService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    operation_orchestration_serviceIcon;
  return node;
}

export function ResourceOrchestrationService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ResourceOrchestrationService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_orchestration_serviceIcon;
  return node;
}

export function ServerLoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ServerLoadBalancer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = server_load_balancerIcon;
  return node;
}

export function ServerlessAppEngine(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ServerlessAppEngine", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = serverless_app_engineIcon;
  return node;
}

export function SimpleApplicationServer(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "SimpleApplicationServer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_application_serverIcon;
  return node;
}

export function WebAppService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "WebAppService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = web_app_serviceIcon;
  return node;
}

// Aliases
export const ESS = AutoScaling;
export const ECS = ElasticComputeService;
export const ECI = ElasticContainerInstance;
export const EHPC = ElasticHighPerformanceComputing;
export const FC = FunctionCompute;
export const OOS = OperationOrchestrationService;
export const ROS = ResourceOrchestrationService;
export const SLB = ServerLoadBalancer;
export const SAE = ServerlessAppEngine;
export const SAS = SimpleApplicationServer;
export const WAS = WebAppService;
