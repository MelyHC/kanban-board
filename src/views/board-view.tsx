import {
  mergeClasses,
  shorthands,
  makeStyles,
} from "@fluentui/react-components";
import React from "react";
import Filter from "../components/filter/filter";
import Heading from "../components/heading/heading";
import Search from "../components/search-component/search";
import StatusColumn from "../components/status-task-column/status-column";
import StatusBoard from "../components/task-list/task-list";

const useStyles = makeStyles({
  boardLayout: {
    width: "100%",
    ...shorthands.margin("0.5em", "2.5em", "1em", "2.5em"),
  },
  title: {
    ...shorthands.margin("20px", "20px"),
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    '@media (max-width: 767.98px)':{
      maxWidth: "100%",
      flexWrap: "wrap",
    }
  },
  w100: {
    width: "100%",
  },
  main: {
    width: "100%",
    '@media (max-width: 767.98px)':{
      width: "100%",
      ...shorthands.margin("1em"),
    }
  },
});

export default function BoardView() {
  const styles = useStyles();
  return (
    <div className={styles.boardLayout} >
      <div >
        <Heading ></Heading>
      </div>
      
      <div className={mergeClasses(styles.flex)}>
        <Search></Search>
        <Filter></Filter>
      </div>
      <div >
        <StatusColumn></StatusColumn>
      </div>
    </div>
  );
} 
