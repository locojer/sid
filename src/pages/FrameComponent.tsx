import { FunctionComponent, useCallback, useEffect } from "react";
import {
  TextField,
  Button,
  Icon,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  FormControlLabel,
  Radio,
} from "@mui/material";
import RectangleComponent from "../components/RectangleComponent";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const onRectangleButton13Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.frameDiv}>
      <button className={styles.rectangleButton} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-1395@2x.png"
      />
      <TextField
        className={styles.rectangleTextField}
        sx={{ width: 104 }}
        color="error"
        variant="standard"
        type="text"
        size="medium"
        margin="none"
      />
      <Button
        className={styles.buttonContainedTextAndIco}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
      >
        Button
      </Button>
      <TextField
        className={styles.inputFilledTextField}
        sx={{ width: 220 }}
        color="primary"
        variant="filled"
        defaultValue="Input"
        type="text"
        label="Label"
        size="medium"
        margin="none"
      />
      <FormControl
        className={styles.selectOutlinedFormControl}
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="primary">Label</InputLabel>
        <Select color="primary" size="medium" label="Label" />
        <FormHelperText />
      </FormControl>
      <FormControlLabel
        className={styles.radioCheckedRadioAndLabel}
        label="Label"
        labelPlacement="end"
        control={<Radio color="primary" checked size="medium" />}
      />
      <FormControlLabel
        className={styles.radioCheckedRadioOnly}
        label=""
        control={<Radio color="primary" checked size="medium" />}
      />
      <button className={styles.rectangleButton1} data-animate-on-scroll />
      <button className={styles.rectangleButton2} />
      <RectangleComponent />
      <button className={styles.rectangleButton3} />
      <button className={styles.rectangleButton4} />
      <textarea className={styles.rectangleTextarea} />
      <button className={styles.rectangleButton5} />
      <button className={styles.rectangleButton6} />
      <button className={styles.rectangleButton7} />
      <button className={styles.rectangleButton8} />
      <button className={styles.rectangleButton9} />
      <div className={styles.rectangleDiv} />
      <button className={styles.rectangleButton10} />
      <button className={styles.rectangleButton11} />
      <div className={styles.rectangleDiv1} />
      <textarea className={styles.rectangleTextarea1} data-animate-on-scroll />
      <div className={styles.rectangleDiv2} />
      <button
        className={styles.rectangleButton12}
        onClick={onRectangleButton13Click}
        data-animate-on-scroll
      />
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} data-scroll-to="rectangle" />
    </div>
  );
};

export default FrameComponent;
