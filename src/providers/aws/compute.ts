import { _Aws } from "./index.js";
import app_runnerIcon from "../../../resources/aws/compute/app-runner.png";
import application_auto_scalingIcon from "../../../resources/aws/compute/application-auto-scaling.png";
import batchIcon from "../../../resources/aws/compute/batch.png";
import compute_optimizerIcon from "../../../resources/aws/compute/compute-optimizer.png";
import computeIcon from "../../../resources/aws/compute/compute.png";
import ec2_amiIcon from "../../../resources/aws/compute/ec2-ami.png";
import ec2_auto_scalingIcon from "../../../resources/aws/compute/ec2-auto-scaling.png";
import ec2_container_registry_imageIcon from "../../../resources/aws/compute/ec2-container-registry-image.png";
import ec2_container_registry_registryIcon from "../../../resources/aws/compute/ec2-container-registry-registry.png";
import ec2_container_registryIcon from "../../../resources/aws/compute/ec2-container-registry.png";
import ec2_elastic_ip_addressIcon from "../../../resources/aws/compute/ec2-elastic-ip-address.png";
import ec2_image_builderIcon from "../../../resources/aws/compute/ec2-image-builder.png";
import ec2_instanceIcon from "../../../resources/aws/compute/ec2-instance.png";
import ec2_instancesIcon from "../../../resources/aws/compute/ec2-instances.png";
import ec2_rescueIcon from "../../../resources/aws/compute/ec2-rescue.png";
import ec2_spot_instanceIcon from "../../../resources/aws/compute/ec2-spot-instance.png";
import ec2Icon from "../../../resources/aws/compute/ec2.png";
import elastic_beanstalk_applicationIcon from "../../../resources/aws/compute/elastic-beanstalk-application.png";
import elastic_beanstalk_deploymentIcon from "../../../resources/aws/compute/elastic-beanstalk-deployment.png";
import elastic_beanstalkIcon from "../../../resources/aws/compute/elastic-beanstalk.png";
import elastic_container_service_containerIcon from "../../../resources/aws/compute/elastic-container-service-container.png";
import elastic_container_service_service_connectIcon from "../../../resources/aws/compute/elastic-container-service-service-connect.png";
import elastic_container_service_serviceIcon from "../../../resources/aws/compute/elastic-container-service-service.png";
import elastic_container_service_taskIcon from "../../../resources/aws/compute/elastic-container-service-task.png";
import elastic_container_serviceIcon from "../../../resources/aws/compute/elastic-container-service.png";
import elastic_kubernetes_serviceIcon from "../../../resources/aws/compute/elastic-kubernetes-service.png";
import fargateIcon from "../../../resources/aws/compute/fargate.png";
import lambda_functionIcon from "../../../resources/aws/compute/lambda-function.png";
import lambdaIcon from "../../../resources/aws/compute/lambda.png";
import lightsailIcon from "../../../resources/aws/compute/lightsail.png";
import local_zonesIcon from "../../../resources/aws/compute/local-zones.png";
import outpostsIcon from "../../../resources/aws/compute/outposts.png";
import serverless_application_repositoryIcon from "../../../resources/aws/compute/serverless-application-repository.png";
import thinkbox_deadlineIcon from "../../../resources/aws/compute/thinkbox-deadline.png";
import thinkbox_draftIcon from "../../../resources/aws/compute/thinkbox-draft.png";
import thinkbox_frostIcon from "../../../resources/aws/compute/thinkbox-frost.png";
import thinkbox_krakatoaIcon from "../../../resources/aws/compute/thinkbox-krakatoa.png";
import thinkbox_sequoiaIcon from "../../../resources/aws/compute/thinkbox-sequoia.png";
import thinkbox_stokeIcon from "../../../resources/aws/compute/thinkbox-stoke.png";
import thinkbox_xmeshIcon from "../../../resources/aws/compute/thinkbox-xmesh.png";
import vmware_cloud_on_awsIcon from "../../../resources/aws/compute/vmware-cloud-on-aws.png";
import wavelengthIcon from "../../../resources/aws/compute/wavelength.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function AppRunner(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AppRunner", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_runnerIcon;
  return node;
}

export function ApplicationAutoScaling(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ApplicationAutoScaling", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_auto_scalingIcon;
  return node;
}

export function Batch(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Batch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = batchIcon;
  return node;
}

export function ComputeOptimizer(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ComputeOptimizer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = compute_optimizerIcon;
  return node;
}

export function Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Compute", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = computeIcon;
  return node;
}

export function EC2Ami(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2Ami", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_amiIcon;
  return node;
}

export function EC2AutoScaling(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2AutoScaling", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_auto_scalingIcon;
  return node;
}

export function EC2ContainerRegistryImage(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2ContainerRegistryImage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_container_registry_imageIcon;
  return node;
}

export function EC2ContainerRegistryRegistry(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2ContainerRegistryRegistry", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    ec2_container_registry_registryIcon;
  return node;
}

export function EC2ContainerRegistry(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2ContainerRegistry", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_container_registryIcon;
  return node;
}

export function EC2ElasticIpAddress(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2ElasticIpAddress", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_elastic_ip_addressIcon;
  return node;
}

export function EC2ImageBuilder(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2ImageBuilder", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_image_builderIcon;
  return node;
}

export function EC2Instance(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2Instance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_instanceIcon;
  return node;
}

export function EC2Instances(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2Instances", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_instancesIcon;
  return node;
}

export function EC2Rescue(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2Rescue", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_rescueIcon;
  return node;
}

export function EC2SpotInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2SpotInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2_spot_instanceIcon;
  return node;
}

export function EC2(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "EC2", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2Icon;
  return node;
}

export function ElasticBeanstalkApplication(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticBeanstalkApplication", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_beanstalk_applicationIcon;
  return node;
}

export function ElasticBeanstalkDeployment(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticBeanstalkDeployment", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_beanstalk_deploymentIcon;
  return node;
}

export function ElasticBeanstalk(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticBeanstalk", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_beanstalkIcon;
  return node;
}

export function ElasticContainerServiceContainer(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Compute(label ?? "ElasticContainerServiceContainer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_container_service_containerIcon;
  return node;
}

export function ElasticContainerServiceServiceConnect(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Compute(label ?? "ElasticContainerServiceServiceConnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_container_service_service_connectIcon;
  return node;
}

export function ElasticContainerServiceService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticContainerServiceService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_container_service_serviceIcon;
  return node;
}

export function ElasticContainerServiceTask(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticContainerServiceTask", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_container_service_taskIcon;
  return node;
}

export function ElasticContainerService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticContainerService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_container_serviceIcon;
  return node;
}

export function ElasticKubernetesService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ElasticKubernetesService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_kubernetes_serviceIcon;
  return node;
}

export function Fargate(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Fargate", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fargateIcon;
  return node;
}

export function LambdaFunction(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "LambdaFunction", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lambda_functionIcon;
  return node;
}

export function Lambda(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Lambda", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lambdaIcon;
  return node;
}

export function Lightsail(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Lightsail", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lightsailIcon;
  return node;
}

export function LocalZones(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "LocalZones", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = local_zonesIcon;
  return node;
}

export function Outposts(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Outposts", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = outpostsIcon;
  return node;
}

export function ServerlessApplicationRepository(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ServerlessApplicationRepository", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    serverless_application_repositoryIcon;
  return node;
}

export function ThinkboxDeadline(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxDeadline", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_deadlineIcon;
  return node;
}

export function ThinkboxDraft(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxDraft", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_draftIcon;
  return node;
}

export function ThinkboxFrost(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxFrost", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_frostIcon;
  return node;
}

export function ThinkboxKrakatoa(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxKrakatoa", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_krakatoaIcon;
  return node;
}

export function ThinkboxSequoia(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxSequoia", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_sequoiaIcon;
  return node;
}

export function ThinkboxStoke(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxStoke", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_stokeIcon;
  return node;
}

export function ThinkboxXmesh(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ThinkboxXmesh", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thinkbox_xmeshIcon;
  return node;
}

export function VmwareCloudOnAWS(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VmwareCloudOnAWS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vmware_cloud_on_awsIcon;
  return node;
}

export function Wavelength(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Wavelength", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = wavelengthIcon;
  return node;
}

// Aliases
export const AutoScaling = ApplicationAutoScaling;
export const AMI = EC2Ami;
export const ECR = EC2ContainerRegistry;
export const EB = ElasticBeanstalk;
export const ECS = ElasticContainerService;
export const EKS = ElasticKubernetesService;
export const SAR = ServerlessApplicationRepository;
