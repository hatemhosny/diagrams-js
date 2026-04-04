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

class _Compute extends _Alibabacloud {
  protected static override _type = "compute";
}

export class AutoScaling extends _Compute {
  protected static override _iconDataUrl = auto_scalingIcon;
}

export class BatchCompute extends _Compute {
  protected static override _iconDataUrl = batch_computeIcon;
}

export class ContainerRegistry extends _Compute {
  protected static override _iconDataUrl = container_registryIcon;
}

export class ContainerService extends _Compute {
  protected static override _iconDataUrl = container_serviceIcon;
}

export class ElasticComputeService extends _Compute {
  protected static override _iconDataUrl = elastic_compute_serviceIcon;
}

export class ElasticContainerInstance extends _Compute {
  protected static override _iconDataUrl = elastic_container_instanceIcon;
}

export class ElasticHighPerformanceComputing extends _Compute {
  protected static override _iconDataUrl = elastic_high_performance_computingIcon;
}

export class ElasticSearch extends _Compute {
  protected static override _iconDataUrl = elastic_searchIcon;
}

export class FunctionCompute extends _Compute {
  protected static override _iconDataUrl = function_computeIcon;
}

export class OperationOrchestrationService extends _Compute {
  protected static override _iconDataUrl = operation_orchestration_serviceIcon;
}

export class ResourceOrchestrationService extends _Compute {
  protected static override _iconDataUrl = resource_orchestration_serviceIcon;
}

export class ServerLoadBalancer extends _Compute {
  protected static override _iconDataUrl = server_load_balancerIcon;
}

export class ServerlessAppEngine extends _Compute {
  protected static override _iconDataUrl = serverless_app_engineIcon;
}

export class SimpleApplicationServer extends _Compute {
  protected static override _iconDataUrl = simple_application_serverIcon;
}

export class WebAppService extends _Compute {
  protected static override _iconDataUrl = web_app_serviceIcon;
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
