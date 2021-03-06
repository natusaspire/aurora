import styled from "styled-components";
import { constants, themes } from "../../../theme";
import { getThemeValue } from "../../../utils";

export default styled.input.attrs({
  type: "checkbox"
})`
  outline: none;
  margin: 0;
  appearance: none;
  position: relative;
  background-color: ${getThemeValue("white", "base")};
  border-color: ${getThemeValue("gray02")};
  border-radius: ${constants.borderRadius.small};

  .checkbox--large & {
    width: 24px;
    height: 24px;
  }

  .checkbox--small & {
    width: 16px;
    height: 16px;
  }

  &:active {
    transform: scale(0.95, 0.95);
  }

  &:before {
    content: "";
    box-sizing: border-box;
    background-color: transparent;
    border-radius: ${constants.borderRadius.small};
    border: 1px solid ${getThemeValue("gray02")};
    position: absolute;
    cursor: pointer;
    transition: border-width 0.3s ${constants.easing.easeInOutQuad};
    transition: border-color 0.3s ${constants.easing.easeInOutQuad};

    .checkbox--large & {
      width: 24px;
      height: 24px;
    }
    .checkbox--small & {
      width: 16px;
      height: 16px;
    }
    &.checkbox--disabled {
      color: grey;
    }
  }
  &:hover:before {
    border-width: 2px;
    border-color: ${getThemeValue("primary", "base")};
  }
  &:focus:before {
    outline: none;
    box-shadow: ${({ theme: { themeName } }) =>
      `0 0 5px 0 ${themes[themeName].primary.base}`};
    border-color: ${getThemeValue("primary", "base")};

    .checkbox--small & {
      width: 16px;
      height: 16px;
    }
    .checkbox--large & {
      width: 24px;
      height: 24px;
    }
  }

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7, 0.7);
    border-radius: ${constants.borderRadius.small};
    background-color: ${getThemeValue("primary", "base")};
    cursor: pointer;
    transition: all 0.3s ${constants.easing.elastic};

    .checkbox--disabled & {
      background-color: ${getThemeValue("gray02")};
    }
    .checkbox--small.checkbox__indeterminate & {
      width: 8px;
      height: 2px;
      transform: translate(-50%, -50%) scale(1, 1);
    }
    .checkbox--large.checkbox__indeterminate & {
      width: 12px;
      height: 2px;
      transform: translate(-50%, -50%) scale(1, 1);
    }
  }
`;
