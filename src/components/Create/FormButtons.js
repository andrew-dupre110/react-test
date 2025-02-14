import React from "react";
import { useHistory } from "react-router";
import { useFormikContext } from "formik";
import { Box, Button, Flex } from "../styled";

const FormButtons = () => {
  const { handleSubmit } = useFormikContext();
  const history = useHistory();

  return (
    <Flex justifyContent="center" gap="4rem">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => history.goBack()}>
          Back
        </Button>
      </Box>
      <Box>
        <Button
          data-cy="saveButton"
          onClick={handleSubmit}
          type="submit"
          backgroundColor="success"
        >
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
