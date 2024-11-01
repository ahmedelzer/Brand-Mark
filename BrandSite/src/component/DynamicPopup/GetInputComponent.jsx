import {
  BooleanParameter,
  DateParameter,
  PhoneNumberParameter,
  SelectParameter,
  // DateTimeParameter,
  // ImageParameterWithPanelActions,
  // LookupInput,
  TextParameter,
} from "../Form/inputs/index";
export function GetInputComponent(type) {
  switch (type) {
    case "text" || "float" || "numeric":
      return TextParameter;
    case "select":
      return SelectParameter;
    case "datetime":
      return DateParameter;
    case "date":
      return DateParameter;
    case "boolean":
      return BooleanParameter;
    case "phoneNumber":
      return PhoneNumberParameter;
    // case "lookup":
    //   return LookupInput;
    default:
      return TextParameter;
  }
}
