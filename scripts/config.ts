/**
 * Configuration for provider auto-generation
 * Ported from Python diagrams library config.py
 */

export const PROVIDERS = [
  "onprem",
  "aws",
  "azure",
  "digitalocean",
  "gcp",
  "ibm",
  "firebase",
  "k8s",
  "alibabacloud",
  "oci",
  "programming",
  "saas",
  "elastic",
  "generic",
  "openstack",
  "outscale",
  "gis",
] as const;

export type Provider = (typeof PROVIDERS)[number];

/**
 * Words that should be converted to uppercase in class names
 */
export const UPPER_WORDS: Record<string, string[]> = {
  aws: ["aws", "api", "ebs", "ec2", "efs", "emr", "rds", "ml", "mq", "nat", "vpc", "waf", "sdk"],
  azure: [
    "ad",
    "b2c",
    "ai",
    "api",
    "cdn",
    "ddos",
    "dns",
    "fxt",
    "hana",
    "hd",
    "id",
    "sap",
    "sql",
    "vm",
    "vpn",
    "vpc",
  ],
  gcp: [
    "gcp",
    "ai",
    "api",
    "cdn",
    "dns",
    "gke",
    "gpu",
    "iap",
    "ids",
    "ml",
    "nat",
    "os",
    "sdk",
    "sql",
    "ssd",
    "tpu",
    "vpn",
  ],
  firebase: ["ab", "fcm", "ml"],
  k8s: [
    "api",
    "cm",
    "ccm",
    "crb",
    "crd",
    "ds",
    "etcd",
    "hpa",
    "k8s",
    "ns",
    "psp",
    "pv",
    "pvc",
    "rb",
    "rs",
    "sa",
    "sc",
    "sts",
    "svc",
  ],
  oci: [
    "oci",
    "ocid",
    "oke",
    "ocir",
    "ddos",
    "waf",
    "bm",
    "vm",
    "cdn",
    "vpn",
    "dns",
    "nat",
    "dms",
    "api",
    "id",
  ],
  elastic: ["apm", "siem", "ece", "eck", "sql"],
  generic: ["vpn", "ios", "xen", "sql", "lxc"],
  outscale: ["osc"],
  openstack: ["rpm", "loci", "nfv", "ec2api"],
  ibm: ["ibm"],
  gis: ["gis", "ban", "ign", "ogc", "qgis", "wfs", "wms"],
};

/**
 * Special title cases for provider names
 */
export const TITLE_WORDS: Record<string, Record<string, string>> = {
  onprem: {
    onprem: "OnPrem",
  },
  alibabacloud: {
    alibabacloud: "AlibabaCloud",
  },
  aws: {
    cloudfront: "CloudFront",
  },
  digitalocean: {
    digitalocean: "DigitalOcean",
  },
  openstack: {
    openstack: "OpenStack",
  },
  ibm: {
    ibm: "IBMCloud",
  },
};

/**
 * Class name aliases (short names)
 */
export const ALIASES: Record<string, Record<string, Record<string, string>>> = {
  onprem: {
    analytics: {
      Powerbi: "PowerBI",
    },
    ci: {
      Circleci: "CircleCI",
      Concourseci: "ConcourseCI",
      Droneci: "DroneCI",
      Gitlabci: "GitlabCI",
      Travisci: "TravisCI",
      Teamcity: "TC",
      Zuulci: "ZuulCI",
    },
    container: {
      Lxc: "LXC",
      Rkt: "RKT",
    },
    database: {
      Clickhouse: "ClickHouse",
      Cockroachdb: "CockroachDB",
      Couchdb: "CouchDB",
      Hbase: "HBase",
      Influxdb: "InfluxDB",
      Janusgraph: "JanusGraph",
      Mariadb: "MariaDB",
      Mongodb: "MongoDB",
      Mssql: "MSSQL",
      Mysql: "MySQL",
      Postgresql: "PostgreSQL",
      Qdrant: "Qdrant",
    },
    gitops: {
      Argocd: "ArgoCD",
    },
    logging: {
      Fluentbit: "FluentBit",
      Rsyslog: "RSyslog",
    },
    network: {
      Etcd: "ETCD",
      Haproxy: "HAProxy",
      OpenServiceMesh: "OSM",
      Opnsense: "OPNSense",
      Pfsense: "PFSense",
      Vyos: "VyOS",
    },
    proxmox: {
      Pve: "ProxmoxVE",
    },
    queue: {
      Activemq: "ActiveMQ",
      Emqx: "EMQX",
      Rabbitmq: "RabbitMQ",
      Zeromq: "ZeroMQ",
    },
    storage: {
      Ceph: "CEPH",
      CephOsd: "CEPH_OSD",
    },
    workflow: {
      Kubeflow: "KubeFlow",
      Nifi: "NiFi",
    },
  },
  aws: {
    analytics: {
      ElasticsearchService: "ES",
    },
    business: {
      AlexaForBusiness: "A4B",
    },
    blockchain: {
      QuantumLedgerDatabaseQldb: "QLDB",
    },
    compute: {
      ApplicationAutoScaling: "AutoScaling",
      EC2Ami: "AMI",
      EC2ContainerRegistry: "ECR",
      ElasticBeanstalk: "EB",
      ElasticContainerService: "ECS",
      ElasticKubernetesService: "EKS",
      ServerlessApplicationRepository: "SAR",
    },
    database: {
      DatabaseMigrationService: "DMS",
      DocumentdbMongodbCompatibility: "DocumentDB",
      DynamodbDax: "DAX",
      DynamodbGlobalSecondaryIndex: "DynamodbGSI",
      Database: "DB",
      Dynamodb: "DDB",
      Elasticache: "ElastiCache",
      QuantumLedgerDatabaseQldb: "QLDB",
    },
    devtools: {
      CommandLineInterface: "CLI",
      DeveloperTools: "DevTools",
    },
    engagement: {
      SimpleEmailServiceSes: "SES",
    },
    general: {
      // Note: OfficeBuilding class already exists, no alias needed
    },
    integration: {
      SimpleNotificationServiceSns: "SNS",
      SimpleQueueServiceSqs: "SQS",
      StepFunctions: "SF",
    },
    iot: {
      Freertos: "FreeRTOS",
      IotHardwareBoard: "IotBoard",
    },
    management: {
      SystemsManager: "SSM",
      SystemsManagerParameterStore: "ParameterStore",
    },
    migration: {
      ApplicationDiscoveryService: "ADS",
      CloudendureMigration: "CEM",
      DatabaseMigrationService: "DMS",
      MigrationAndTransfer: "MAT",
      ServerMigrationService: "SMS",
    },
    ml: {
      DeepLearningContainers: "DLC",
    },
    network: {
      CloudFront: "CF",
      ElasticLoadBalancing: "ELB",
      ElbApplicationLoadBalancer: "ALB",
      ElbClassicLoadBalancer: "CLB",
      ElbNetworkLoadBalancer: "NLB",
      GlobalAccelerator: "GAX",
      InternetGateway: "IGW",
      TransitGateway: "TGW",
      TransitGatewayAttachment: "TGWAttach",
    },
    security: {
      CertificateManager: "ACM",
      Cloudhsm: "CloudHSM",
      DirectoryService: "DS",
      FirewallManager: "FMS",
      IdentityAndAccessManagementIamAccessAnalyzer: "IAMAccessAnalyzer",
      IdentityAndAccessManagementIamAWSSts: "IAMAWSSts",
      IdentityAndAccessManagementIamPermissions: "IAMPermissions",
      IdentityAndAccessManagementIamRole: "IAMRole",
      IdentityAndAccessManagementIam: "IAM",
      KeyManagementService: "KMS",
      ResourceAccessManager: "RAM",
    },
    storage: {
      CloudendureDisasterRecovery: "CDR",
      ElasticBlockStoreEBS: "EBS",
      ElasticFileSystemEFS: "EFS",
      Fsx: "FSx",
      SimpleStorageServiceS3: "S3",
    },
  },
  azure: {
    compute: {
      ContainerRegistries: "ACR",
      KubernetesServices: "AKS",
      VMScaleSet: "VMSS",
    },
  },
  gcp: {
    analytics: {
      Bigquery: "BigQuery",
      Pubsub: "PubSub",
    },
    compute: {
      AppEngine: "GAE",
      ComputeEngine: "GCE",
      Functions: "GCF",
      KubernetesEngine: "GKE",
      Run: "CloudRun",
    },
    database: {
      Bigtable: "BigTable",
    },
    devtools: {
      ContainerRegistry: "GCR",
    },
    migration: {
      MigrateComputeEngine: "CE",
    },
    ml: {
      Automl: "AutoML",
      NaturalLanguageAPI: "NLAPI",
      SpeechToText: "STT",
      TextToSpeech: "TTS",
    },
    network: {
      CloudIDS: "IDS",
      PrivateServiceConnect: "PSC",
      VirtualPrivateCloud: "VPC",
    },
    security: {
      AccessContextManager: "ACM",
      KeyManagementService: "KMS",
      SecurityCommandCenter: "SCC",
    },
    storage: {
      LocalSSD: "SSD",
      Storage: "GCS",
    },
  },
  firebase: {
    grow: {
      Messaging: "FCM",
    },
  },
  k8s: {
    clusterconfig: {
      Limits: "LimitRange",
      HPA: "HorizontalPodAutoscaler",
    },
    compute: {
      Deploy: "Deployment",
      DS: "DaemonSet",
      RS: "ReplicaSet",
      STS: "StatefulSet",
    },
    controlplane: {
      API: "APIServer",
      CM: "ControllerManager",
      KProxy: "KubeProxy",
      Sched: "Scheduler",
    },
    group: {
      NS: "Namespace",
    },
    network: {
      Ep: "Endpoint",
      Ing: "Ingress",
      Netpol: "NetworkPolicy",
      SVC: "Service",
    },
    podconfig: {
      CM: "ConfigMap",
    },
    rbac: {
      CRole: "ClusterRole",
      CRB: "ClusterRoleBinding",
      RB: "RoleBinding",
      SA: "ServiceAccount",
    },
    storage: {
      PV: "PersistentVolume",
      PVC: "PersistentVolumeClaim",
      SC: "StorageClass",
      Vol: "Volume",
    },
  },
  alibabacloud: {
    application: {
      LogService: "SLS",
      MessageNotificationService: "MNS",
      PerformanceTestingService: "PTS",
      SmartConversationAnalysis: "SCA",
    },
    compute: {
      AutoScaling: "ESS",
      ElasticComputeService: "ECS",
      ElasticContainerInstance: "ECI",
      ElasticHighPerformanceComputing: "EHPC",
      FunctionCompute: "FC",
      OperationOrchestrationService: "OOS",
      ResourceOrchestrationService: "ROS",
      ServerLoadBalancer: "SLB",
      ServerlessAppEngine: "SAE",
      SimpleApplicationServer: "SAS",
      WebAppService: "WAS",
    },
    database: {
      DataManagementService: "DMS",
      DataTransmissionService: "DTS",
      DatabaseBackupService: "DBS",
      DisributeRelationalDatabaseService: "DRDS",
      GraphDatabaseService: "GDS",
      RelationalDatabaseService: "RDS",
    },
    network: {
      CloudEnterpriseNetwork: "CEN",
      ElasticIpAddress: "EIP",
      ServerLoadBalancer: "SLB",
      VirtualPrivateCloud: "VPC",
    },
    security: {
      AntiBotService: "ABS",
      AntifraudService: "AS",
      CloudFirewall: "CFW",
      ContentModeration: "CM",
      DataEncryptionService: "DES",
      WebApplicationFirewall: "WAF",
    },
    storage: {
      FileStorageHdfs: "HDFS",
      FileStorageNas: "NAS",
      HybridBackupRecovery: "HBR",
      HybridCloudDisasterRecovery: "HDR",
      ObjectStorageService: "OSS",
      ObjectTableStore: "OTS",
    },
  },
  oci: {
    compute: {
      VM: "VirtualMachine",
      VMWhite: "VirtualMachineWhite",
      BM: "BareMetal",
      BMWhite: "BareMetalWhite",
      OCIR: "OCIRegistry",
      OCIRWhite: "OCIRegistryWhite",
      OKE: "ContainerEngine",
      OKEWhite: "ContainerEngineWhite",
    },
    database: {
      Autonomous: "ADB",
      AutonomousWhite: "ADBWhite",
      DatabaseService: "DBService",
      DatabaseServiceWhite: "DBServiceWhite",
    },
  },
  programming: {
    framework: {
      Fastapi: "FastAPI",
      Graphql: "GraphQL",
      Dotnet: "DotNet",
      Nextjs: "NextJs",
    },
    language: {
      Javascript: "JavaScript",
      Nodejs: "NodeJS",
      Php: "PHP",
      Typescript: "TypeScript",
    },
  },
  saas: {
    logging: {
      Datadog: "DataDog",
      Newrelic: "NewRelic",
    },
  },
  elastic: {
    elasticsearch: {
      Elasticsearch: "ElasticSearch",
      Logstash: "LogStash",
      MachineLearning: "ML",
    },
  },
  openstack: {
    user: {
      Openstackclient: "OpenStackClient",
    },
    billing: {
      Cloudkitty: "CloudKitty",
    },
    deployment: {
      Kolla: "KollaAnsible",
      Tripleo: "TripleO",
    },
  },
  outscale: {
    compute: {
      Compute: "OSC",
    },
  },
};
