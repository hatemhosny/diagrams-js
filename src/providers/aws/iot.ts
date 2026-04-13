import { _Aws } from "./index.js";
import freertosIcon from "../../../resources/aws/iot/freertos.png";
import internet_of_thingsIcon from "../../../resources/aws/iot/internet-of-things.png";
import iot_1_clickIcon from "../../../resources/aws/iot/iot-1-click.png";
import iot_actionIcon from "../../../resources/aws/iot/iot-action.png";
import iot_actuatorIcon from "../../../resources/aws/iot/iot-actuator.png";
import iot_alexa_echoIcon from "../../../resources/aws/iot/iot-alexa-echo.png";
import iot_alexa_enabled_deviceIcon from "../../../resources/aws/iot/iot-alexa-enabled-device.png";
import iot_alexa_skillIcon from "../../../resources/aws/iot/iot-alexa-skill.png";
import iot_alexa_voice_serviceIcon from "../../../resources/aws/iot/iot-alexa-voice-service.png";
import iot_analytics_channelIcon from "../../../resources/aws/iot/iot-analytics-channel.png";
import iot_analytics_data_setIcon from "../../../resources/aws/iot/iot-analytics-data-set.png";
import iot_analytics_data_storeIcon from "../../../resources/aws/iot/iot-analytics-data-store.png";
import iot_analytics_notebookIcon from "../../../resources/aws/iot/iot-analytics-notebook.png";
import iot_analytics_pipelineIcon from "../../../resources/aws/iot/iot-analytics-pipeline.png";
import iot_analyticsIcon from "../../../resources/aws/iot/iot-analytics.png";
import iot_bankIcon from "../../../resources/aws/iot/iot-bank.png";
import iot_bicycleIcon from "../../../resources/aws/iot/iot-bicycle.png";
import iot_buttonIcon from "../../../resources/aws/iot/iot-button.png";
import iot_cameraIcon from "../../../resources/aws/iot/iot-camera.png";
import iot_carIcon from "../../../resources/aws/iot/iot-car.png";
import iot_cartIcon from "../../../resources/aws/iot/iot-cart.png";
import iot_certificateIcon from "../../../resources/aws/iot/iot-certificate.png";
import iot_coffee_potIcon from "../../../resources/aws/iot/iot-coffee-pot.png";
import iot_coreIcon from "../../../resources/aws/iot/iot-core.png";
import iot_desired_stateIcon from "../../../resources/aws/iot/iot-desired-state.png";
import iot_device_defenderIcon from "../../../resources/aws/iot/iot-device-defender.png";
import iot_device_gatewayIcon from "../../../resources/aws/iot/iot-device-gateway.png";
import iot_device_managementIcon from "../../../resources/aws/iot/iot-device-management.png";
import iot_door_lockIcon from "../../../resources/aws/iot/iot-door-lock.png";
import iot_eventsIcon from "../../../resources/aws/iot/iot-events.png";
import iot_factoryIcon from "../../../resources/aws/iot/iot-factory.png";
import iot_fire_tv_stickIcon from "../../../resources/aws/iot/iot-fire-tv-stick.png";
import iot_fire_tvIcon from "../../../resources/aws/iot/iot-fire-tv.png";
import iot_genericIcon from "../../../resources/aws/iot/iot-generic.png";
import iot_greengrass_connectorIcon from "../../../resources/aws/iot/iot-greengrass-connector.png";
import iot_greengrassIcon from "../../../resources/aws/iot/iot-greengrass.png";
import iot_hardware_boardIcon from "../../../resources/aws/iot/iot-hardware-board.png";
import iot_houseIcon from "../../../resources/aws/iot/iot-house.png";
import iot_httpIcon from "../../../resources/aws/iot/iot-http.png";
import iot_http2Icon from "../../../resources/aws/iot/iot-http2.png";
import iot_jobsIcon from "../../../resources/aws/iot/iot-jobs.png";
import iot_lambdaIcon from "../../../resources/aws/iot/iot-lambda.png";
import iot_lightbulbIcon from "../../../resources/aws/iot/iot-lightbulb.png";
import iot_medical_emergencyIcon from "../../../resources/aws/iot/iot-medical-emergency.png";
import iot_mqttIcon from "../../../resources/aws/iot/iot-mqtt.png";
import iot_over_the_air_updateIcon from "../../../resources/aws/iot/iot-over-the-air-update.png";
import iot_policy_emergencyIcon from "../../../resources/aws/iot/iot-policy-emergency.png";
import iot_policyIcon from "../../../resources/aws/iot/iot-policy.png";
import iot_reported_stateIcon from "../../../resources/aws/iot/iot-reported-state.png";
import iot_ruleIcon from "../../../resources/aws/iot/iot-rule.png";
import iot_sensorIcon from "../../../resources/aws/iot/iot-sensor.png";
import iot_servoIcon from "../../../resources/aws/iot/iot-servo.png";
import iot_shadowIcon from "../../../resources/aws/iot/iot-shadow.png";
import iot_simulatorIcon from "../../../resources/aws/iot/iot-simulator.png";
import iot_sitewiseIcon from "../../../resources/aws/iot/iot-sitewise.png";
import iot_thermostatIcon from "../../../resources/aws/iot/iot-thermostat.png";
import iot_things_graphIcon from "../../../resources/aws/iot/iot-things-graph.png";
import iot_topicIcon from "../../../resources/aws/iot/iot-topic.png";
import iot_travelIcon from "../../../resources/aws/iot/iot-travel.png";
import iot_utilityIcon from "../../../resources/aws/iot/iot-utility.png";
import iot_windfarmIcon from "../../../resources/aws/iot/iot-windfarm.png";

function _Iot(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "iot";
  return node;
}

export function Freertos(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Freertos", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Freertos";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = freertosIcon;
  return node;
}

export function InternetOfThings(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "InternetOfThings", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InternetOfThings";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_of_thingsIcon;
  return node;
}

export function Iot1Click(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Iot1Click", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Iot1Click";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_1_clickIcon;
  return node;
}

export function IotAction(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAction", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAction";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_actionIcon;
  return node;
}

export function IotActuator(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotActuator", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotActuator";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_actuatorIcon;
  return node;
}

export function IotAlexaEcho(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAlexaEcho", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAlexaEcho";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_alexa_echoIcon;
  return node;
}

export function IotAlexaEnabledDevice(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAlexaEnabledDevice", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAlexaEnabledDevice";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_alexa_enabled_deviceIcon;
  return node;
}

export function IotAlexaSkill(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAlexaSkill", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAlexaSkill";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_alexa_skillIcon;
  return node;
}

export function IotAlexaVoiceService(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAlexaVoiceService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAlexaVoiceService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_alexa_voice_serviceIcon;
  return node;
}

export function IotAnalyticsChannel(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalyticsChannel", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalyticsChannel";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analytics_channelIcon;
  return node;
}

export function IotAnalyticsDataSet(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalyticsDataSet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalyticsDataSet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analytics_data_setIcon;
  return node;
}

export function IotAnalyticsDataStore(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalyticsDataStore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalyticsDataStore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analytics_data_storeIcon;
  return node;
}

export function IotAnalyticsNotebook(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalyticsNotebook", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalyticsNotebook";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analytics_notebookIcon;
  return node;
}

export function IotAnalyticsPipeline(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalyticsPipeline", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalyticsPipeline";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analytics_pipelineIcon;
  return node;
}

export function IotAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotAnalytics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotAnalytics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_analyticsIcon;
  return node;
}

export function IotBank(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotBank", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotBank";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_bankIcon;
  return node;
}

export function IotBicycle(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotBicycle", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotBicycle";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_bicycleIcon;
  return node;
}

export function IotButton(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotButton", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotButton";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_buttonIcon;
  return node;
}

export function IotCamera(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCamera", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCamera";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_cameraIcon;
  return node;
}

export function IotCar(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCar", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCar";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_carIcon;
  return node;
}

export function IotCart(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCart", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCart";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_cartIcon;
  return node;
}

export function IotCertificate(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCertificate", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCertificate";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_certificateIcon;
  return node;
}

export function IotCoffeePot(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCoffeePot", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCoffeePot";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_coffee_potIcon;
  return node;
}

export function IotCore(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotCore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_coreIcon;
  return node;
}

export function IotDesiredState(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotDesiredState", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotDesiredState";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_desired_stateIcon;
  return node;
}

export function IotDeviceDefender(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotDeviceDefender", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotDeviceDefender";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_device_defenderIcon;
  return node;
}

export function IotDeviceGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotDeviceGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotDeviceGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_device_gatewayIcon;
  return node;
}

export function IotDeviceManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotDeviceManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotDeviceManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_device_managementIcon;
  return node;
}

export function IotDoorLock(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotDoorLock", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotDoorLock";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_door_lockIcon;
  return node;
}

export function IotEvents(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotEvents", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotEvents";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_eventsIcon;
  return node;
}

export function IotFactory(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotFactory", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotFactory";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_factoryIcon;
  return node;
}

export function IotFireTvStick(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotFireTvStick", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotFireTvStick";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_fire_tv_stickIcon;
  return node;
}

export function IotFireTv(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotFireTv", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotFireTv";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_fire_tvIcon;
  return node;
}

export function IotGeneric(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotGeneric", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotGeneric";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_genericIcon;
  return node;
}

export function IotGreengrassConnector(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotGreengrassConnector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotGreengrassConnector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_greengrass_connectorIcon;
  return node;
}

export function IotGreengrass(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotGreengrass", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotGreengrass";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_greengrassIcon;
  return node;
}

export function IotHardwareBoard(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHardwareBoard", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotHardwareBoard";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_hardware_boardIcon;
  return node;
}

export function IotHouse(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHouse", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotHouse";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_houseIcon;
  return node;
}

export function IotHttp(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHttp", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotHttp";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_httpIcon;
  return node;
}

export function IotHttp2(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHttp2", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotHttp2";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_http2Icon;
  return node;
}

export function IotJobs(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotJobs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotJobs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_jobsIcon;
  return node;
}

export function IotLambda(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotLambda", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotLambda";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_lambdaIcon;
  return node;
}

export function IotLightbulb(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotLightbulb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotLightbulb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_lightbulbIcon;
  return node;
}

export function IotMedicalEmergency(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotMedicalEmergency", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotMedicalEmergency";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_medical_emergencyIcon;
  return node;
}

export function IotMqtt(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotMqtt", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotMqtt";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_mqttIcon;
  return node;
}

export function IotOverTheAirUpdate(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotOverTheAirUpdate", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotOverTheAirUpdate";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_over_the_air_updateIcon;
  return node;
}

export function IotPolicyEmergency(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotPolicyEmergency", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotPolicyEmergency";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_policy_emergencyIcon;
  return node;
}

export function IotPolicy(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotPolicy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotPolicy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_policyIcon;
  return node;
}

export function IotReportedState(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotReportedState", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotReportedState";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_reported_stateIcon;
  return node;
}

export function IotRule(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotRule", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotRule";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_ruleIcon;
  return node;
}

export function IotSensor(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotSensor", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotSensor";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_sensorIcon;
  return node;
}

export function IotServo(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotServo", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotServo";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_servoIcon;
  return node;
}

export function IotShadow(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotShadow", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotShadow";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_shadowIcon;
  return node;
}

export function IotSimulator(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotSimulator", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotSimulator";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_simulatorIcon;
  return node;
}

export function IotSitewise(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotSitewise", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotSitewise";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_sitewiseIcon;
  return node;
}

export function IotThermostat(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotThermostat", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotThermostat";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_thermostatIcon;
  return node;
}

export function IotThingsGraph(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotThingsGraph", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotThingsGraph";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_things_graphIcon;
  return node;
}

export function IotTopic(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotTopic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotTopic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_topicIcon;
  return node;
}

export function IotTravel(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotTravel", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotTravel";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_travelIcon;
  return node;
}

export function IotUtility(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotUtility", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotUtility";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_utilityIcon;
  return node;
}

export function IotWindfarm(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotWindfarm", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IotWindfarm";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_windfarmIcon;
  return node;
}

// Aliases
export const FreeRTOS = Freertos;
export const IotBoard = IotHardwareBoard;
