// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  urlBase: "https://temporal-ecs.herokuapp.com/ECS/Api/v1/",
  endpointUserLogin: "https://temporal-ecs.herokuapp.com/ECS/Api/v1/user/login",
  endpointUserTokenRefresh:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/user/tokenRefresh",
  endpointAnalistLogin:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/analist/login",
  endpointAnalistInfo:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/analist/show_analist",
  endpointShowStatistics:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/general/show_statistics",
  endpointAnalistTokenRefresh:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/analist/tokenRefresh",
  endpointCollectorLogin:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/collector/login",
  endpointCollectorInfo:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/collector/show_collector",
  endpointShowCodes:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/collector/show_codes",
  endpointCollectorTokenRefresh:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/collector/tokenRefresh",
  endpointDeliverCode:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/collector/deliver_code",
  endpointFormConfirm:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/confirm",
  endpointFamliyIdentifiers:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/family_identifiers",
  endpointFormFindSection:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/findSection",
  endpointGetFormMember:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/user/get_form/member",
  endpointInsertUpdateAnswersMember:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/user/insertUpdate_answers/member",
  endpointFormUpdateSection:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/form/updateSection",
  endpointCurrentEntity:
    "https://temporal-ecs.herokuapp.com/ECS/Api/v1/current/entity"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
