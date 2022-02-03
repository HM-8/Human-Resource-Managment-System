import React from "react";
import Chart from "../DashBoard/Admin Dashboard/Charts";
import FeaturedInfo from "../DashBoard/Admin Dashboard/FeaturedInfo";
import { userData } from "../DashBoard/Admin Dashboard/demmyData";
import WidgetSm from "../DashBoard/Admin Dashboard/WidgetSm";
import { makeStyles } from "@material-ui/core";
import DetailInfo from "../DashBoard/Admin Dashboard/DetailInfo";
import WidgetLg from "../DashBoard/Admin Dashboard/WidgetLg";

const useStyles = makeStyles((theme) => ({
  home: {
    flex: 4,
  },
  widget: {
    display: "flex",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
          <FeaturedInfo />
          <Chart
            title="Attendance"
            data={userData}
            dataKey="Active User"
          />
          <DetailInfo></DetailInfo>
          <div className={classes.widget}>
            <WidgetSm />
            <WidgetLg />
          </div>
    </div>
  );
}
