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

class _Compute extends _Aws {
  protected static override _type = "compute";
}

export class AppRunner extends _Compute {
  protected static override _iconDataUrl = app_runnerIcon;
}

export class ApplicationAutoScaling extends _Compute {
  protected static override _iconDataUrl = application_auto_scalingIcon;
}

export class Batch extends _Compute {
  protected static override _iconDataUrl = batchIcon;
}

export class ComputeOptimizer extends _Compute {
  protected static override _iconDataUrl = compute_optimizerIcon;
}

export class Compute extends _Compute {
  protected static override _iconDataUrl = computeIcon;
}

export class EC2Ami extends _Compute {
  protected static override _iconDataUrl = ec2_amiIcon;
}

export class EC2AutoScaling extends _Compute {
  protected static override _iconDataUrl = ec2_auto_scalingIcon;
}

export class EC2ContainerRegistryImage extends _Compute {
  protected static override _iconDataUrl = ec2_container_registry_imageIcon;
}

export class EC2ContainerRegistryRegistry extends _Compute {
  protected static override _iconDataUrl = ec2_container_registry_registryIcon;
}

export class EC2ContainerRegistry extends _Compute {
  protected static override _iconDataUrl = ec2_container_registryIcon;
}

export class EC2ElasticIpAddress extends _Compute {
  protected static override _iconDataUrl = ec2_elastic_ip_addressIcon;
}

export class EC2ImageBuilder extends _Compute {
  protected static override _iconDataUrl = ec2_image_builderIcon;
}

export class EC2Instance extends _Compute {
  protected static override _iconDataUrl = ec2_instanceIcon;
}

export class EC2Instances extends _Compute {
  protected static override _iconDataUrl = ec2_instancesIcon;
}

export class EC2Rescue extends _Compute {
  protected static override _iconDataUrl = ec2_rescueIcon;
}

export class EC2SpotInstance extends _Compute {
  protected static override _iconDataUrl = ec2_spot_instanceIcon;
}

export class EC2 extends _Compute {
  protected static override _iconDataUrl = ec2Icon;
}

export class ElasticBeanstalkApplication extends _Compute {
  protected static override _iconDataUrl = elastic_beanstalk_applicationIcon;
}

export class ElasticBeanstalkDeployment extends _Compute {
  protected static override _iconDataUrl = elastic_beanstalk_deploymentIcon;
}

export class ElasticBeanstalk extends _Compute {
  protected static override _iconDataUrl = elastic_beanstalkIcon;
}

export class ElasticContainerServiceContainer extends _Compute {
  protected static override _iconDataUrl = elastic_container_service_containerIcon;
}

export class ElasticContainerServiceServiceConnect extends _Compute {
  protected static override _iconDataUrl = elastic_container_service_service_connectIcon;
}

export class ElasticContainerServiceService extends _Compute {
  protected static override _iconDataUrl = elastic_container_service_serviceIcon;
}

export class ElasticContainerServiceTask extends _Compute {
  protected static override _iconDataUrl = elastic_container_service_taskIcon;
}

export class ElasticContainerService extends _Compute {
  protected static override _iconDataUrl = elastic_container_serviceIcon;
}

export class ElasticKubernetesService extends _Compute {
  protected static override _iconDataUrl = elastic_kubernetes_serviceIcon;
}

export class Fargate extends _Compute {
  protected static override _iconDataUrl = fargateIcon;
}

export class LambdaFunction extends _Compute {
  protected static override _iconDataUrl = lambda_functionIcon;
}

export class Lambda extends _Compute {
  protected static override _iconDataUrl = lambdaIcon;
}

export class Lightsail extends _Compute {
  protected static override _iconDataUrl = lightsailIcon;
}

export class LocalZones extends _Compute {
  protected static override _iconDataUrl = local_zonesIcon;
}

export class Outposts extends _Compute {
  protected static override _iconDataUrl = outpostsIcon;
}

export class ServerlessApplicationRepository extends _Compute {
  protected static override _iconDataUrl = serverless_application_repositoryIcon;
}

export class ThinkboxDeadline extends _Compute {
  protected static override _iconDataUrl = thinkbox_deadlineIcon;
}

export class ThinkboxDraft extends _Compute {
  protected static override _iconDataUrl = thinkbox_draftIcon;
}

export class ThinkboxFrost extends _Compute {
  protected static override _iconDataUrl = thinkbox_frostIcon;
}

export class ThinkboxKrakatoa extends _Compute {
  protected static override _iconDataUrl = thinkbox_krakatoaIcon;
}

export class ThinkboxSequoia extends _Compute {
  protected static override _iconDataUrl = thinkbox_sequoiaIcon;
}

export class ThinkboxStoke extends _Compute {
  protected static override _iconDataUrl = thinkbox_stokeIcon;
}

export class ThinkboxXmesh extends _Compute {
  protected static override _iconDataUrl = thinkbox_xmeshIcon;
}

export class VmwareCloudOnAWS extends _Compute {
  protected static override _iconDataUrl = vmware_cloud_on_awsIcon;
}

export class Wavelength extends _Compute {
  protected static override _iconDataUrl = wavelengthIcon;
}

// Aliases
export const AutoScaling = ApplicationAutoScaling;
export const AMI = EC2Ami;
export const ECR = EC2ContainerRegistry;
export const EB = ElasticBeanstalk;
export const ECS = ElasticContainerService;
export const EKS = ElasticKubernetesService;
export const SAR = ServerlessApplicationRepository;
