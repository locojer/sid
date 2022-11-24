import { FunctionComponent, useState, useCallback } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SearchForm.module.css";

const SearchForm: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);
  
  const onJeraldineClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchFormDiv}>
        <div className={styles.inputsRowDiv}>
          <div className={styles.inputGroupDiv}>
            <Autocomplete
              className={styles.departureFieldAutocomplete}
              disablePortal
              options={[
                "Jeraldine (JER)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)Sanya (SYX)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
              size="medium"
            />
          </div>
          <div className={styles.inputGroupDiv}>
            <Autocomplete
              className={styles.departureFieldAutocomplete}
              disablePortal
              options={[
                "Clark (CRK)",
                "Launceston (LST)",
                "Kalibo (KLO)",
                "Colombo CMB",
                "Melbourne (AVV)",
                "Los Angeles (LA)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Los Angeles (LA)"
              size="medium"
            />
          </div>
          <div className={styles.inputGroupDiv}>
            <div className={styles.departureFieldAutocomplete}>
              <DatePicker
                label="Date"
                value={dateFieldDateTimePickerValue}
                onChange={(newValue: any) => {
                  setDateFieldDateTimePickerValue(newValue);
                }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    variant="outlined"
                    size="medium"
                    renderInput={{ placeholder: "01/05/2022" }}
                    helperText=""
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonGroupDiv}>
          <button
            className={styles.searchFlightsButton}
            onClick={onSearchFlightsButtonClick}
          >
            <div className={styles.buttonDiv}>Search flights</div>
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchForm;
