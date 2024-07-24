import { CloseRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #404040;
  padding: 0px 4px;
  ${({ error, theme }) =>
    error &&
    `
    color: #ef5350;
  `}
  ${({ small }) =>
    small &&
    `
    font-size: 8px;
  `}
  ${({ popup, theme }) =>
    popup &&
    `
  color: #b1b2b3;
  `}
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid #4d4c4c;
  background-color: transparent;
  color:#404040;
  outline: none;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:focus-within {
    border-color: #5B86E5;
  }
  ${({ error, theme }) =>
    error &&
    `
    border-color: #ef5350;
  `}

  ${({ chipableInput, height, theme }) =>
    chipableInput &&
    `
    background: #FFFFFF;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    min-height: ${height}
  `}

  ${({ small }) =>
    small &&
    `
    border-radius: 6px;
    padding: 8px 10px;
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  color: #b1b2b3;
  border: 0.5px solid #b1b2b360;
  `}
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #404040;
  &:focus {
    outline: none;
  }
  ${({ small }) =>
    small &&
    `
    font-size: 12px;
  `}

  ${({ popup, theme }) =>
    popup &&
    `
  color: #b1b2b3;
  `} #b1b2b3;
`;

const Error = styled.p`
  font-size: 12px;
  margin: 0px 4px;
  color: #ef5350;
  ${({ small }) =>
    small &&
    `
    font-size: 8px;
  `}
`;

const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  background: #007AFF10;
  color: #007AFF;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  error,
  handelChange,
  textArea,
  rows,
  columns,
  chipableInput,
  chipableArray,
  removeChip,
  height,
  small,
  popup,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container small={small}>
      <Label small={small} popup={popup} error={error}>
        {label}
      </Label>
      <OutlinedInput
        small={small}
        popup={popup}
        error={error}
        chipableInput={chipableInput}
        height={height}
      >
        {chipableInput ? (
          <ChipWrapper>
            {chipableArray.map((chip, index) => (
              <Chip key={index}>
                <span>{chip}</span>
                <CloseRounded
                  sx={{ fontSize: "14px" }}
                  onClick={() => removeChip(name, index)}
                />
              </Chip>
            ))}
            <Input
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e) => handelChange(e)}
            />
          </ChipWrapper>
        ) : (
          <>
            <Input
              popup={popup}
              small={small}
              as={textArea ? "textarea" : "input"}
              name={name}
              rows={rows}
              columns={columns}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handelChange(e)}
              type={password && !showPassword ? "password" : "text"}
            />
            {password && (
              <>
                {showPassword ? (
                  <>
                    <Visibility onClick={() => setShowPassword(false)} />
                  </>
                ) : (
                  <>
                    <VisibilityOff onClick={() => setShowPassword(true)} />
                  </>
                )}
              </>
            )}
          </>
        )}
      </OutlinedInput>
      {error && (
        <Error small={small} popup={popup}>
          {error}
        </Error>
      )}
    </Container>
  );
};

export default TextInput;
