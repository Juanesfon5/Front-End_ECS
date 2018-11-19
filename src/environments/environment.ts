// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  urlBase: "http://168.1.140.145:31071/ECS/Api/v1/",
  endpointUserLogin: "http://168.1.140.145:31071/ECS/Api/v1/user/login",
  endpointUserTokenRefresh:
    "http://168.1.140.145:31071/ECS/Api/v1/user/tokenRefresh",
  endpointAnalistLogin: "http://168.1.140.145:31071/ECS/Api/v1/analist/login",
  endpointAnalistInfo:
    "http://168.1.140.145:31071/ECS/Api/v1/analist/show_analist",
  endpointShowStatistics:
    "http://168.1.140.145:31071/ECS/Api/v1/general/show_statistics",
  endpointAnalistTokenRefresh:
    "http://168.1.140.145:31071/ECS/Api/v1/analist/tokenRefresh",
  endpointCollectorLogin:
    "http://168.1.140.145:31071/ECS/Api/v1/collector/login",
  endpointCollectorInfo:
    "http://168.1.140.145:31071/ECS/Api/v1/collector/show_collector",
  endpointShowCodes:
    "http://168.1.140.145:31071/ECS/Api/v1/collector/show_codes",
  endpointCollectorTokenRefresh:
    "http://168.1.140.145:31071/ECS/Api/v1/collector/tokenRefresh",
  endpointDeliverCode:
    "http://168.1.140.145:31071/ECS/Api/v1/collector/deliver_code",
  endpointFormConfirm: "http://168.1.140.145:31071/ECS/Api/v1/form/confirm",
  endpointFamliyIdentifiers:
    "http://168.1.140.145:31071/ECS/Api/v1/form/family_identifiers/",
  endpointFormFindSection:
    "http://168.1.140.145:31071/ECS/Api/v1/form/findSection/",
  endpointGetFormMember:
    "http://168.1.140.145:31071/ECS/Api/v1/form/user/get_form/member",
  endpointInsertUpdateAnswersMember:
    "http://168.1.140.145:31071/ECS/Api/v1/form/user/insertUpdate_answers/member",
  endpointFormUpdateSection:
    "http://168.1.140.145:31071/ECS/Api/v1/form/updateSection",
  endpointCurrentEntity: "http://168.1.140.145:31071/ECS/Api/v1/current/entity"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
